import express from "express";
import { loginAdmin } from "../controllers/adminLogin.controller.js";
import { logoutAdmin } from "../controllers/adminLogout.controller.js";
import { insertAdmin } from "../controllers/insertAdmin.controller.js";
import isAdmin from "../Middleware/isAdmin.middleware.js";

const router = express.Router();

// Admin authentication routes
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/verify", isAdmin, (req, res) => res.status(200).json({ message: "Verified" }));

// Admin management routes
router.post("/insert",isAdmin ,insertAdmin);

export default router;