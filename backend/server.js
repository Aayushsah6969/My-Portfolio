import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import AdminRoute from "./routes/admin.route.js";
import ProjectRoute from "./routes/project.route.js";
import BlogRoute from "./routes/blog.route.js";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Configure CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps)
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS policy does not allow this origin"), false);
      }
    },
    credentials: true, // Allow cookies and authentication headers
  })
);

// API Routes
app.use("/admin", AdminRoute);
app.use("/project", ProjectRoute);
app.use("/blog", BlogRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


