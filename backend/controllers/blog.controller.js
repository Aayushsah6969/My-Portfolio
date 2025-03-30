import Blog from "../models/blog.model.js";

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, technologies, image } = req.body;

    // Validate required fields
    if (!title || !content || !technologies || !image) {
      return res.status(400).json({
        message: "Missing required fields",
        required: ["title", "content", "technologies", "image"]
      });
    }

    // Ensure technologies is an array
    const techArray = Array.isArray(technologies) ? technologies : [technologies];

    const blog = new Blog({
      title,
      content,
      technologies: techArray,
      image
    });

    await blog.save();
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message
    });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message
    });
  }
};

// Update a blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, technologies, image } = req.body;

    // Validate at least one field to update
    if (!title && !content && !technologies && !image) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one field to update"
      });
    }

    // Prepare update object
    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (technologies) {
      updateData.technologies = Array.isArray(technologies) ? technologies : [technologies];
    }
    if (image) updateData.image = image;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error: error.message
    });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      blog: deletedBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete blog",
      error: error.message
    });
  }
};
