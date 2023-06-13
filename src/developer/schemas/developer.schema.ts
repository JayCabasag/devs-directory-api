import * as mongoose from 'mongoose';

export const DeveloperSchema = new mongoose.Schema({
    name: String,
    age: Number,
    username: String,
    fullname: String,
    title: String,
    languages: [String],
    quote: String,
    experience: String,
    salary: Number
});