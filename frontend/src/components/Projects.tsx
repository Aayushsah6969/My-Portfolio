import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, Star, Code2, Users, XCircle } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} onReadMore={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  stats,
  index,
  onReadMore
}: Project & { onReadMore: () => void }) => (
  <div className="group relative bg-white backdrop-blur-lg bg-opacity-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 rounded-xl hover:bg-white transition-colors duration-300">
            <GitHub className="w-5 h-5 text-gray-900" />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 rounded-xl hover:bg-white transition-colors duration-300">
            <ExternalLink className="w-5 h-5 text-gray-900" />
          </a>
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-indigo-600 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">{tech}</span>
        ))}
      </div>
      <button onClick={onReadMore} className="mt-4 text-indigo-600 hover:underline font-medium">Read More</button>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
        <XCircle className="w-6 h-6" />
      </button>
      <h3 className="text-2xl font-bold text-indigo-600 mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
    </div>
  </div>
);

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stats: { code: number; stars: number; users: number };
}

const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard. Built with modern technologies and best practices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: { code: 15, stars: 128, users: 5 }
  },
  {
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration, and progress tracking features.',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: { code: 10, stars: 89, users: 3 }
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and monitoring with real-time data visualization.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: { code: 12, stars: 156, users: 8 }
  }
];

export default Projects;
