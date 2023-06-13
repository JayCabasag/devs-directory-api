"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperSchema = void 0;
const mongoose = require("mongoose");
exports.DeveloperSchema = new mongoose.Schema({
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
//# sourceMappingURL=developer.schema.js.map