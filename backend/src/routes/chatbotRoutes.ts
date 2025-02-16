import express, { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Initialize Gemini AI with API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

router.post("/", async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
    }

    try {
        console.log("🔵 Received message from frontend:", message);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const chat = model.startChat();

        const result = await chat.sendMessage(message);
        const botReply = result.response.text() ?? "I'm not sure how to respond.";

        console.log("🟢 Gemini AI Response:", botReply);

        res.json({ reply: botReply });

    } catch (error: any) {
        console.error("🔴 Gemini AI API Error:", error);
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
});

export default router;
