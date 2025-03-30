import Project from "../models/project.model.js";

// Create a new project
export const createProject = async (req, res) => {
  try {
    const { imageUrl, title, description, technologiesUsed, githubLink, liveLink } = req.body;

    // Validate required fields
    if (!imageUrl || !title || !description || !technologiesUsed?.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const project = new Project({ imageUrl, title, description, technologiesUsed, githubLink, liveLink });
    await project.save();

    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single project by ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the project exists before updating
    const projectExists = await Project.findById(id);
    if (!projectExists) return res.status(404).json({ message: "Project not found" });

    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Project updated successfully", updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the project exists before deleting
    const projectExists = await Project.findById(id);
    if (!projectExists) return res.status(404).json({ message: "Project not found" });

    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
