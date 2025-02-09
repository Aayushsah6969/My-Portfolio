import express from "express";
import { logoutAdmin } from "../controllers/adminLogout.controller.js";
// import isAdmin from "../Middleware/isAdmin.middleware.js";

const router = express.Router();

// Logout Route
// router.post("/logout", isAdmin, logoutAdmin);
router.post("/logout", logoutAdmin);


export default router;
