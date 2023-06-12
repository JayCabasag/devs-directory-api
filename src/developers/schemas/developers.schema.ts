import * as mongoose from 'mongoose';

export const DeveloperSchema = new mongoose.Schema({
    username: { type: String, required: true },
    fullname: { type: String, required: true },
    title: { type: String, required: true },
    languages: [{ type: String }],
    quote: { type: String },
    experience: { type: String },
    salary: { type: Number }
});