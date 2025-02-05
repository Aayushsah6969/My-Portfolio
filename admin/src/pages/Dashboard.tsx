import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Layout, FileText, FolderGit2, LogOut, Menu, X } from 'lucide-react';

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-white shadow-md transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center space-x-2">
          <Layout className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-xl">Admin Panel</span>
        </div>
        <nav className="mt-8">
          <NavLink
            to="/projects"
            onClick={() => setIsSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-3 ${
                isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <FolderGit2 className="w-5 h-5" />
            <span>Projects</span>
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setIsSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-3 ${
                isActive ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <FileText className="w-5 h-5" />
            <span>Blogs</span>
          </NavLink>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-3 text-red-500 hover:bg-red-50 w-full mt-auto absolute bottom-0"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}