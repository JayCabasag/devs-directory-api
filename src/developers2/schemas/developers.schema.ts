import { Schema, model } from 'mongoose';
import { Developer } from '../interfaces/developers.interface';

const developerSchema = new Schema<Developer>({
    username: String,
    fullname: String,
    title: String,
    languages: [String],
    quote: String,
    experience: String,
    salary: Number,
});

export const DeveloperModel = model<Developer>('Developer', developerSchema);