import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// ✅ Load .env before importing any routes
dotenv.config();

import courseRoutes from './routes/courseRoutes';
import chatbotRoutes from './routes/chatbotRoutes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.use(cors({
    origin: "http://localhost:3000", // Change this if needed
    credentials: true
}));

app.get('/', (_req, res) => {
    res.send('Course Recommendation Chatbot Backend is Running!');
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
