import express, { Request, Response } from 'express';
import Course from '../models/Course';

const router = express.Router();

// Get all courses
router.get('/', async (_req: Request, res: Response) => {
    const courses = await Course.find();
    res.json(courses);
});

// Add a course
router.post('/', async (req: Request, res: Response) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: 'Course added successfully!' });
});

export default router;
