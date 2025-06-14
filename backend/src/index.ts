import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatbotRoutes from "./routes/chatbotRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5001;

// MongoDB connection
console.log("🔎 Mongo URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chatbot", chatbotRoutes);

app.get("/", (_req, res) => {
  res.send("🚀 Gemini AI Chatbot Backend is Running!");
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
