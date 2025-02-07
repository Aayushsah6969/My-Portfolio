import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center group">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                AAYUSH
              </span>
            </a>

            <div className="hidden md:flex space-x-1">
              <NavLink id="home" onClick={() => scrollToSection("home")}>Home</NavLink>
              <NavLink id="tech" onClick={() => scrollToSection("tech")}>Tech Stack</NavLink>
              <NavLink id="projects" onClick={() => scrollToSection("projects")}>Projects</NavLink>
              <NavLink id="clients" onClick={() => scrollToSection("clients")}>Clients</NavLink>
              <NavLink id="blogs" href="/blogs">Blogs</NavLink>
              <NavLink id="contact" onClick={() => scrollToSection("contact")}>Contact</NavLink>
            </div>

            <button
              className="md:hidden bg-gradient-to-r from-indigo-50 to-purple-50 p-2 rounded-xl"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 w-72 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <a href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Code2 className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AAYUSH</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-1">
              <MobileNavLink id="home" onClick={() => scrollToSection("home")}>Home</MobileNavLink>
              <MobileNavLink id="tech" onClick={() => scrollToSection("tech")}>Tech Stack</MobileNavLink>
              <MobileNavLink id="projects" onClick={() => scrollToSection("projects")}>Projects</MobileNavLink>
              <MobileNavLink id="clients" onClick={() => scrollToSection("clients")}>Clients</MobileNavLink>
              <MobileNavLink href="/blogs">Blogs</MobileNavLink>
              <MobileNavLink id="contact" onClick={() => scrollToSection("contact")}>Contact</MobileNavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({
  id,
  onClick,
  href,
  children,
}: {
  id?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
    >
      {href ? <a href={href}>{children}</a> : children}
    </button>
  );
};

const MobileNavLink = ({
  id,
  onClick,
  href,
  children,
}: {
  id?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
    >
      {href ? <a href={href}>{children}</a> : children}
      <ChevronRight className="w-4 h-4" />
    </button>
  );
};

export default Navbar;
