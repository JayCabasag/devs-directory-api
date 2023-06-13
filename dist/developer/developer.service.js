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
exports.DeveloperService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const developer_schema_1 = require("./schemas/developer.schema");
let DeveloperService = exports.DeveloperService = class DeveloperService {
    constructor(developerModel) {
        this.developerModel = developerModel;
    }
    async findAll() {
        const developers = await this.developerModel.find();
        return developers;
    }
    async create(developer) {
        const res = await this.developerModel.create(developer)
            .catch(() => {
            throw new common_1.HttpException('Failed created developer', common_1.HttpStatus.BAD_REQUEST);
        });
        return res;
    }
    async findById(id) {
        const developer = await this.developerModel.findById(id)
            .catch(() => {
            throw new common_1.NotFoundException('Developer not found');
        });
        return developer;
    }
    async findByUsername(username) {
        const developer = await this.developerModel.findOne({ username });
        return developer;
    }
    async updateById(id, developer) {
        const res = await this.developerModel.findByIdAndUpdate(id, developer, {
            new: true,
            runValidators: true
        })
            .catch(() => {
            throw new common_1.HttpException('Failed updating developer', common_1.HttpStatus.BAD_REQUEST);
        });
        return res;
    }
    async deleteById(id) {
        const res = await this.developerModel.findByIdAndDelete(id)
            .catch(() => {
            throw new common_1.HttpException('Failed deleting developer', common_1.HttpStatus.BAD_REQUEST);
        });
        return res;
    }
    async search(term) {
        const result = await this.developerModel.find({
            $text: {
                $search: term
            }
        });
        return result;
    }
};
exports.DeveloperService = DeveloperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(developer_schema_1.Developer.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], DeveloperService);
//# sourceMappingURL=developer.service.js.map