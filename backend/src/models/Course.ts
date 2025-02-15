import mongoose, { Schema, Document } from 'mongoose';

interface ICourse extends Document {
    name: string;
    description: string;
    department: string;
    tags: string[];
}

const CourseSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    department: { type: String, required: true },
    tags: { type: [String], required: true },
});

export default mongoose.model<ICourse>('Course', CourseSchema);
