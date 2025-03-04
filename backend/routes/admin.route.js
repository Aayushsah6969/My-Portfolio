import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// ✅ Check if the user is logged in
router.get("/check-auth", (req, res) => {
  const token = req.cookies?.token; // ✅ Safe access to token

  if (!token) {
    return res.json({ isAuthenticated: false });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ isAuthenticated: true, adminId: verified.id });
  } catch (error) {
    return res.json({ isAuthenticated: false });
  }
});

export default router;
// The /check-auth route checks if the user is logged in by verifying the JWT token. If the token is valid, it returns isAuthenticated: true and the adminId. Otherwise, it returns isAuthenticated: false.