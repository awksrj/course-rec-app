import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { OpenAI } from "openai";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define TypeScript interfaces
interface ChatRequest {
    message: string;
}

interface ChatResponse {
    reply: string;
}

// ✅ FIX: Ensure function return type is correct
app.post("/chat", async (req: Request<{}, {}, ChatRequest>, res: Response<ChatResponse>): Promise<void> => {
    try {
        const { message } = req.body;

        if (!message) {
            res.status(400).json({ reply: "Message is required" });
            return;
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        });

        // ✅ FIX: Handle potential `null` value
        const reply = response.choices[0].message.content ?? "I'm not sure how to respond.";
        res.json({ reply });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ reply: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
