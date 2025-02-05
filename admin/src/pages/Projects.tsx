import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    githubLink: '',
    liveLink: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, { ...formData, id: Date.now() }]);
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: '',
      githubLink: '',
      liveLink: '',
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 w-full sm:w-auto justify-center"
        >
          <Plus className="w-5 h-5" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.split(',').map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center justify-center sm:justify-start"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex items-center justify-center sm:justify-start"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Project</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) =>
                    setFormData({ ...formData, technologies: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  GitHub Link
                </label>
                <input
                  type="url"
                  value={formData.githubLink}
                  onChange={(e) =>
                    setFormData({ ...formData, githubLink: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Live Link
                </label>
                <input
                  type="url"
                  value={formData.liveLink}
                  onChange={(e) =>
                    setFormData({ ...formData, liveLink: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-6"
              >
                Add Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}