import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
            <Link
              to="/"
              className="flex items-center group"
            >
              <Code2 className="h-8 w-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text transform group-hover:rotate-12 transition-transform duration-300" />
                            <Code2 className="h-8 w-8 text-indigo-600" />
              
              <span className="ml-2 text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                Portfolio
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/#tech">Tech Stack</NavLink>
              <NavLink to="/#projects">Projects</NavLink>
              <NavLink to="/#clients">Clients</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/#contact">Contact</NavLink>
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 w-72 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Code2 className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Portfolio</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-1">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/#tech">Tech Stack</MobileNavLink>
              <MobileNavLink to="/#projects">Projects</MobileNavLink>
              <MobileNavLink to="/#clients">Clients</MobileNavLink>
              <MobileNavLink to="/blogs">Blogs</MobileNavLink>
              <MobileNavLink to="/#contact">Contact</MobileNavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const isActive = useLocation().pathname === to || useLocation().hash === to.substring(1);
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
        isActive
          ? 'text-indigo-600 bg-indigo-50'
          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const isActive = useLocation().pathname === to || useLocation().hash === to.substring(1);
  
  return (
    <Link
      to={to}
      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50'
          : 'text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
      }`}
    >
      {children}
      <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${
        isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
      }`} />
    </Link>
  );
};

export default Navbar;