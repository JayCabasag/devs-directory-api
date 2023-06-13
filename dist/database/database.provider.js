"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb+srv://jaycabasag:developer1999@devs-directory.darg6lc.mongodb.net/?retryWrites=true&w=majority'),
    },
];
//# sourceMappingURL=database.provider.js.map