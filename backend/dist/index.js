"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const chatbotRoutes_1 = __importDefault(require("./routes/chatbotRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/courses', courseRoutes_1.default);
app.use('/api/chatbot', chatbotRoutes_1.default);
app.get('/', (_req, res) => {
    res.send('Course Recommendation Chatbot Backend is Running!');
});
// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;
(0, db_1.default)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
