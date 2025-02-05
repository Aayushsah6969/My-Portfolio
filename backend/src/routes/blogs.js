const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Blog = require('../models/Blog');
const multer = require('multer');

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new blog (protected route)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file.path;

    const blog = new Blog({
      title,
      description,
      image
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;