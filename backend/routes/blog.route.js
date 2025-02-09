import express from "express";
import {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";
import isAdmin from "../Middleware/isAdmin.middleware.js";

const router = express.Router();

// Blog Routes
router.post("/upload", isAdmin,createBlog);
router.get("/getall",getAllBlogs);
router.put("/update/:id",isAdmin, updateBlog);
router.delete("/delete/:id", isAdmin,deleteBlog);

export default router;
