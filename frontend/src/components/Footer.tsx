import React from 'react';
import { Code2, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building beautiful and functional web experiences with modern technologies.
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/Aayushsah6969" icon={<GitHub />} />
              <SocialLink href="https://www.linkedin.com/in/aayush-sah-9076a5299/" icon={<Linkedin />} />
              <SocialLink href="https://twitter.com" icon={<Twitter />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#tech">Tech Stack</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#clients">Clients</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>email@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aayush Sah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

export default Footer;