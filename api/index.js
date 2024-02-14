import express from "express";
import connectDB from "./config/db.js";

const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Mern Authentication API 🔏 is working...",
  });
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load all routes

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
