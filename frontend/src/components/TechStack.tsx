import React from 'react';

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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {allTechnologies.map((tech, index) => (
            <TechIcon key={`${tech.category}-${tech.name}`} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ 
  imageUrl, 
  name,
  category,
  index 
}: { 
  imageUrl: string; 
  name: string;
  category: string;
  index: number;
}) => (
  <div 
    className="flex flex-col items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300"
    style={{
      animation: `fadeInUp 0.5s ease-out forwards ${index * 0.05}s`,
      opacity: 0,
      transform: 'translateY(20px)',
    }}
  >
    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 mb-3">
      <img src={imageUrl} alt={name} className="w-10 h-10 object-contain" />
    </div>
    <span className="text-sm font-medium text-gray-800 text-center">{name}</span>
  </div>
);

// Create a flat list of all technologies with their icons
const allTechnologies = [
  // Frontend
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg", name: "React & Next.js", category: "Frontend" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg", name: "TypeScript", category: "Frontend" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", name: "Tailwind CSS", category: "Frontend" },
  
  // Backend
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", name: "Node.js", category: "Backend" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg", name: "Python", category: "Backend" },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", name: "GraphQL", category: "Backend" },
  
  // Database
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", name: "PostgreSQL", category: "Database" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", name: "MongoDB", category: "Database" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/redis.svg", name: "Redis", category: "Database" },
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL", category: "Database" },
  
  // Languages
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", name: "JavaScript", category: "Languages" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/java-4.svg", name: "Java", category: "Languages" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/c.svg", name: "C++", category: "Languages" },
  
  // DevOps
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/docker.svg", name: "Docker", category: "DevOps" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", name: "AWS", category: "DevOps" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", name: "CI/CD", category: "DevOps" },
  
  // Design
  { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma", category: "Design" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg", name: "UI/UX", category: "Design" },
  { imageUrl: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg", name: "Design Systems", category: "Design" }
];

export default TechStack;