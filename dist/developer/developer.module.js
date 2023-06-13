"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperModule = void 0;
const common_1 = require("@nestjs/common");
const developer_controller_1 = require("./developer.controller");
const developer_service_1 = require("./developer.service");
const database_module_1 = require("../database/database.module");
const developers_providers_1 = require("./providers/developers.providers");
let DeveloperModule = exports.DeveloperModule = class DeveloperModule {
};
exports.DeveloperModule = DeveloperModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [developer_controller_1.DeveloperController],
        providers: [
            developer_service_1.DeveloperService,
            ...developers_providers_1.developersProviders,
        ]
    })
], DeveloperModule);
//# sourceMappingURL=developer.module.js.map