"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersController = void 0;
const common_1 = require("@nestjs/common");
const developers_service_1 = require("./developers.service");
let DevelopersController = exports.DevelopersController = class DevelopersController {
    constructor(developerService) {
        this.developerService = developerService;
    }
    async getAllDevelopers(term) {
        return [];
        if (term) {
            const searchRes = await this.developerService.search(term);
            return searchRes;
        }
        const res = await this.developerService.findAll();
        return res;
    }
    async createDeveloper(developer) {
        const username = developer.username;
        const isUsernameExist = await this.developerService.findByUsername(username);
        if (isUsernameExist) {
            throw new common_1.HttpException('Username already exists', common_1.HttpStatus.CONFLICT);
        }
        const res = await this.developerService.create(developer);
        return res;
    }
    async getDeveloperById(id) {
        const res = this.developerService.findById(id);
        return res;
    }
    async updateDeveloper(id, developer) {
        const res = await this.developerService.updateById(id, developer);
        return res;
    }
    async deleteDeveloper(id) {
        const res = this.developerService.deleteById(id);
        return res;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevelopersController.prototype, "getAllDevelopers", null);
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevelopersController.prototype, "createDeveloper", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevelopersController.prototype, "getDeveloperById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DevelopersController.prototype, "updateDeveloper", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevelopersController.prototype, "deleteDeveloper", null);
exports.DevelopersController = DevelopersController = __decorate([
    (0, common_1.Controller)('developers'),
    __metadata("design:paramtypes", [developers_service_1.DevelopersService])
], DevelopersController);
//# sourceMappingURL=developers.controller.js.map