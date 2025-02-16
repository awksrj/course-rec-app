import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoutes from "./routes/chatbotRoutes";

dotenv.config(); // ✅ Load .env before using the API key

const app: Application = express();
const port = process.env.PORT || 5000;

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
