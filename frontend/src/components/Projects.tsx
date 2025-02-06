import React from 'react';
import { ExternalLink, Github as GitHub, Star, Code2, Users, Zap } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4 animate-bounce">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
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
}: Project) => (
  <div
    className="group relative bg-white backdrop-blur-lg bg-opacity-80 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_80px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-2"
    style={{
      animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
      opacity: 0,
      transform: 'translateY(20px)',
    }}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-xl hover:bg-white transition-colors duration-300 group-hover:translate-y-0 translate-y-10 transition-transform duration-300"
          >
            <GitHub className="w-5 h-5 text-gray-900" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-xl hover:bg-white transition-colors duration-300 group-hover:translate-y-0 translate-y-10 transition-transform duration-300 delay-75"
          >
            <ExternalLink className="w-5 h-5 text-gray-900" />
          </a>
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-1 text-gray-600">
          <Code2 className="w-4 h-4" />
          <span className="text-sm">{stats.code}k</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Star className="w-4 h-4" />
          <span className="text-sm">{stats.stars}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{stats.users}k</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface ProjectStats {
  code: number;  // Lines of code in thousands
  stars: number; // GitHub stars
  users: number; // Active users in thousands
}

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stats: ProjectStats;
  index?: number;
}

const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and admin dashboard. Built with modern technologies and best practices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: {
      code: 15,
      stars: 128,
      users: 5
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration, and progress tracking features.',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: {
      code: 10,
      stars: 89,
      users: 3
    }
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and monitoring with real-time data visualization.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    stats: {
      code: 12,
      stars: 156,
      users: 8
    }
  }
];

export default Projects;