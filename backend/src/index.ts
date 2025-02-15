import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import courseRoutes from './routes/courseRoutes';
import chatbotRoutes from './routes/chatbotRoutes';



dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (_req, res) => {
    res.send('Course Recommendation Chatbot Backend is Running!');
});

// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
