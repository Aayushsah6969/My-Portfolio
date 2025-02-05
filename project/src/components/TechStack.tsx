import React from 'react';
import { Database, Globe, Server, Code, Palette, Terminal } from 'lucide-react';

const TechStack = () => {
  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4 animate-bounce">
              TECHNOLOGIES & SKILLS
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            My Tech Universe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <TechCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ 
  icon, 
  title, 
  technologies,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  technologies: Array<{ name: string; level: number }>;
  index: number;
}) => (
  <div 
    className="group bg-white backdrop-blur-lg bg-opacity-80 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_80px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-2"
    style={{
      animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
      opacity: 0,
      transform: 'translateY(20px)',
    }}
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center shadow-inner transform group-hover:scale-110 transition-transform duration-300">
          <div className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
    </div>

    <div className="space-y-6">
      {technologies.map((tech) => (
        <div key={tech.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-medium">{tech.name}</span>
            <span className="text-sm font-medium text-indigo-600">{tech.level}%</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left transition-all duration-1000 ease-out group-hover:scale-x-100"
              style={{ 
                width: `${tech.level}%`,
                transform: 'scaleX(0.3)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const techCategories = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Frontend",
    technologies: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend",
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database",
    technologies: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 }
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Languages",
    technologies: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 }
    ]
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "DevOps",
    technologies: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 }
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design",
    technologies: [
      { name: "Figma", level: 90 },
      { name: "UI/UX", level: 85 },
      { name: "Design Systems", level: 85 }
    ]
  }
];

export default TechStack;