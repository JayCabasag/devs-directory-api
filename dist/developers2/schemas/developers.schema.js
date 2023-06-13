"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperModel = void 0;
const mongoose_1 = require("mongoose");
const developerSchema = new mongoose_1.Schema({
    username: String,
    fullname: String,
    title: String,
    languages: [String],
    quote: String,
    experience: String,
    salary: Number,
});
exports.DeveloperModel = (0, mongoose_1.model)('Developer', developerSchema);
//# sourceMappingURL=developers.schema.js.map