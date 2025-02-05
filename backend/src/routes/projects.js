const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');
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

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new project (protected route)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, technologies, githubLink, liveLink } = req.body;
    const image = req.file.path;

    const project = new Project({
      title,
      description,
      image,
      technologies,
      githubLink,
      liveLink
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;