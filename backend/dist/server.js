"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const openai_1 = require("openai");
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// ✅ FIX: Ensure function return type is correct
app.post("/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { message } = req.body;
        if (!message) {
            res.status(400).json({ reply: "Message is required" });
            return;
        }
        const response = yield openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        });
        // ✅ FIX: Handle potential `null` value
        const reply = (_a = response.choices[0].message.content) !== null && _a !== void 0 ? _a : "I'm not sure how to respond.";
        res.json({ reply });
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ reply: "Internal Server Error" });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
