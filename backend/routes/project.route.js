import express from "express";
import {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";
import isAdmin from "../Middleware/isAdmin.middleware.js";

const router = express.Router();

// Project Routes
router.post("/upload", isAdmin,createProject); // Create a new project
router.get("/getall", getAllProjects); // Get all projects
router.put("/update/:id", isAdmin,updateProject); // Update a project by ID
router.delete("/delete/:id",isAdmin, deleteProject); // Delete a project by ID

export default router;
