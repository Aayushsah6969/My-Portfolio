import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import AdminRoute from './routes/admin.route.js';
import ProjectRoute from './routes/project.route.js';
import BlogRoute from './routes/blog.route.js';
import AdminLogout from './routes/adminLogout.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// API routes
app.use('/admin',AdminRoute);
app.use('/project',ProjectRoute);
app.use('/blog',BlogRoute);
app.use('/adminLogout', AdminLogout);