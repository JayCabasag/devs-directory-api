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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperSchema = exports.Developer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Developer = exports.Developer = class Developer {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Developer.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Developer.prototype, "fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Developer.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Developer.prototype, "languages", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Developer.prototype, "quote", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Developer.prototype, "experience", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Developer.prototype, "salary", void 0);
exports.Developer = Developer = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Developer);
exports.DeveloperSchema = mongoose_1.SchemaFactory.createForClass(Developer);
exports.DeveloperSchema.index({
    username: 'text',
    fullname: 'text'
});
//# sourceMappingURL=Developer.schema.js.map