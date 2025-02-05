import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Bold, Italic, Link as LinkIcon, Image as ImageIcon, List, Plus, X } from 'lucide-react';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Image,
    ],
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      content: editor.getHTML(),
      technologies: technologies.split(',').map(tech => tech.trim()),
      image,
      createdAt: new Date().toISOString(),
    };
    setBlogs([...blogs, newBlog]);
    setTitle('');
    setTechnologies('');
    setImage('');
    editor.commands.setContent('');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 w-full sm:w-auto justify-center"
        >
          <Plus className="w-5 h-5" />
          <span>Add Blog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <div className="prose prose-sm mb-4 max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
              <div className="flex flex-wrap gap-2">
                {blog.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Blog</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <div className="border rounded-md">
                  <div className="border-b p-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className={`p-1 rounded ${
                        editor?.isActive('bold') ? 'bg-gray-200' : ''
                      }`}
                    >
                      <Bold className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={`p-1 rounded ${
                        editor?.isActive('italic') ? 'bg-gray-200' : ''
                      }`}
                    >
                      <Italic className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const url = window.prompt('Enter URL');
                        if (url) {
                          editor.chain().focus().setLink({ href: url }).run();
                        }
                      }}
                      className={`p-1 rounded ${
                        editor?.isActive('link') ? 'bg-gray-200' : ''
                      }`}
                    >
                      <LinkIcon className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const url = window.prompt('Enter image URL');
                        if (url) {
                          editor.chain().focus().setImage({ src: url }).run();
                        }
                      }}
                      className="p-1 rounded"
                    >
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                      className={`p-1 rounded ${
                        editor?.isActive('bulletList') ? 'bg-gray-200' : ''
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                  <EditorContent editor={editor} className="p-4 min-h-[200px] prose max-w-none" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-6"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}