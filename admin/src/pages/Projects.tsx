import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Plus, X } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    technologiesUsed: "",
    githubLink: "",
    liveLink: "",
  });
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/project/getall");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: null,
      technologiesUsed: project.technologiesUsed.join(", "),
      githubLink: project.githubLink,
      liveLink: project.liveLink,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("technologiesUsed", formData.technologiesUsed);
    formDataToSend.append("githubLink", formData.githubLink);
    formDataToSend.append("liveLink", formData.liveLink);

    try {
      if (editingProject) {
        await axios.put(`http://localhost:3000/project/update/${editingProject._id}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("http://localhost:3000/project/upload", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      fetchProjects();
      setIsModalOpen(false);
      setEditingProject(null);
      setFormData({
        title: "",
        description: "",
        image: null,
        technologiesUsed: "",
        githubLink: "",
        liveLink: "",
      });
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/project/delete/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus className="w-5 h-5" />
          <span className="ml-2">Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white shadow-md rounded-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-2">
              {project.technologiesUsed?.map((tech) => (
  <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
    {tech}
  </span>
))}

              </div>
              <div className="flex gap-4 mt-2">
                <a href={project.githubLink} target="_blank" className="text-gray-600 hover:text-gray-900">GitHub</a>
                <a href={project.liveLink} target="_blank" className="text-blue-500 hover:text-blue-700">Live Demo</a>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <FaEdit className="text-blue-600 cursor-pointer" onClick={() => handleEdit(project)} />
                <FaTrash className="text-red-600 cursor-pointer" onClick={() => handleDelete(project._id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{editingProject ? "Edit Project" : "Add New Project"}</h2>
              <button onClick={() => {
                setIsModalOpen(false);
                setEditingProject(null);
                setFormData({
                  title: "",
                  description: "",
                  image: null,
                  technologiesUsed: "",
                  githubLink: "",
                  liveLink: "",
                });
              }} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" className="w-full p-2 border rounded" required />
              <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full p-2 border rounded" required></textarea>
              <input type="file" name="image" onChange={handleFileChange} className="w-full p-2 border rounded" required />
              <input type="text" name="technologiesUsed" value={formData.technologiesUsed} onChange={handleInputChange} placeholder="Technologies (comma-separated)" className="w-full p-2 border rounded" required />
              <input type="url" name="githubLink" value={formData.githubLink} onChange={handleInputChange} placeholder="GitHub Link" className="w-full p-2 border rounded" required />
              <input type="url" name="liveLink" value={formData.liveLink} onChange={handleInputChange} placeholder="Live Link" className="w-full p-2 border rounded" required />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Add Project</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
