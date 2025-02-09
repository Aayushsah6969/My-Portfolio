import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";

const isAdmin = async (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find admin in the database
    const admin = await Admin.findById(decoded.id);
    if (!admin || !admin.isAdmin) {
      return res.status(403).json({ message: "Access denied. Not an admin." });
    }

    // Attach admin to request object
    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
};

export default isAdmin;
