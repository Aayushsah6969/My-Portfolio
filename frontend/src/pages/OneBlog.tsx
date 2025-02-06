import React from 'react';
import { Calendar, Clock, User, Share2, Bookmark, MessageCircle, Heart } from 'lucide-react';

const OneBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-5" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
          <div className="text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                REACT DEVELOPMENTs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
              Building Scalable Web Applications with React and TypeScript
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Mar 15, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Featured Image */}
          <div className="aspect-video">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Social Sharing */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>2.5k</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>125</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                In today's fast-paced web development landscape, building scalable applications is more crucial than ever. React and TypeScript have emerged as a powerful combination for creating robust, maintainable web applications. This comprehensive guide will walk you through the essential patterns and practices for building scalable applications.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why TypeScript with React?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TypeScript adds static typing to JavaScript, providing better tooling, enhanced code quality, and improved developer experience. When combined with React, it offers:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li className="mb-2">Early error detection</li>
                <li className="mb-2">Better refactoring capabilities</li>
                <li className="mb-2">Enhanced IDE support</li>
                <li>Improved team collaboration</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Best Practices for Scalable Architecture</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                When building large-scale applications, following established patterns and practices is essential. Here are some key considerations:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Takeaways:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li className="mb-2">Implement proper component organization</li>
                  <li className="mb-2">Use TypeScript interfaces for props</li>
                  <li className="mb-2">Implement proper state management</li>
                  <li>Follow consistent coding standards</li>
                </ul>
              </div>
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBlog;