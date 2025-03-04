import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser"; // ✅ Import cookie-parser
import AdminRoute from "./routes/admin.route.js";
import ProjectRoute from "./routes/project.route.js";
import BlogRoute from "./routes/blog.route.js";
import AdminLogout from "./routes/adminLogout.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); // ✅ Use cookie-parser
app.use(
  cors({
    origin: "http://localhost:5176",
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// API Routes
app.use("/admin", AdminRoute);
app.use("/project", ProjectRoute);
app.use("/blog", BlogRoute);
app.use("/adminLogout", AdminLogout);
