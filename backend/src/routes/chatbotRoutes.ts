import express, { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
    }

    try {
        console.log("🔵 Received message from frontend:", message); // Debugging

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        console.log("🟢 OpenAI Response:", response); // Debugging

        // Extract and send chatbot reply
        const botReply = response.choices[0]?.message?.content ?? "I'm not sure how to respond.";
        res.json({ reply: botReply });
    } catch (error: any) {
        console.error("🔴 OpenAI API Error:", error); // Debugging
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
});

export default router;
