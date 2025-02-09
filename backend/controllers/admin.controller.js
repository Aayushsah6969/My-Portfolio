import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password, userId } = req.body;

    // Check if admin exists with provided email and userId
    const admin = await Admin.findOne({ email, userId });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, userId: admin.userId }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
