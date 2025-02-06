import React from 'react';
import { Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hi, I'm <span className="text-indigo-600">John Doe</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in-delay">
              I craft beautiful and functional web experiences with modern technologies.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <SocialLink href="https://github.com" icon={<GitHub />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="https://twitter.com" icon={<Twitter />} />
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Hire Me
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                Download CV
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Hero;