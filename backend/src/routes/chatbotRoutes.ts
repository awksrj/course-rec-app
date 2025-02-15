import express, { Request, Response } from 'express';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req: Request, res: Response) => {
    const { message } = req.body;

    const prompt = `Suggest a suitable college course based on this user query: "${message}"`;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: prompt }],
        });

        res.json({ reply: response.choices[0].message?.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;
