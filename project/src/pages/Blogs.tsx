import React from 'react';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      {/* Header */}
      <div className="relative overflow-hidden py-20">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4 animate-bounce">
                MY THOUGHTS & IDEAS
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Blog Posts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing my insights, experiences, and knowledge about web development and technology
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} {...post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({
  image,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  index,
}: BlogPost & { index: number }) => (
  <div
    className="group bg-white backdrop-blur-lg bg-opacity-80 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_80px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-2"
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
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-indigo-600">
          {category}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{readTime} min read</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700">{author.name}</span>
        </div>
        <button className="flex items-center gap-1 text-indigo-600 font-medium group">
          Read More
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
);

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  author: Author;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Building Scalable Web Applications with React and TypeScript',
    excerpt: 'Learn how to create maintainable and scalable web applications using React and TypeScript with best practices.',
    date: 'Mar 15, 2024',
    readTime: 8,
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    category: 'React'
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'Explore advanced CSS techniques and modern features that can enhance your web development workflow.',
    date: 'Mar 12, 2024',
    readTime: 6,
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    category: 'CSS'
  },
  {
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04',
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'A look at upcoming trends and technologies that will shape the future of web development.',
    date: 'Mar 10, 2024',
    readTime: 7,
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    category: 'Trends'
  }
];

export default Blogs;