"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.developersProviders = void 0;
const developer_schema_1 = require("../schemas/developer.schema");
exports.developersProviders = [
    {
        provide: 'DEVELOPER_MODEL',
        useFactory: (connection) => connection.model('Developer', developer_schema_1.DeveloperSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=developers.providers.js.map