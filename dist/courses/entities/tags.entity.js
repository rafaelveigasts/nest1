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
exports.Tags = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("./course.entity");
const crypto_1 = require("crypto");
let Tags = class Tags {
    generatedId() {
        if (this.id) {
            return this.id;
        }
        this.id = (0, crypto_1.randomUUID)();
    }
};
exports.Tags = Tags;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tags.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tags.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => course_entity_1.Course, (course) => course.tags),
    __metadata("design:type", Array)
], Tags.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Tags.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Tags.prototype, "updated_At", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tags.prototype, "generatedId", null);
exports.Tags = Tags = __decorate([
    (0, typeorm_1.Entity)('tags')
], Tags);
//# sourceMappingURL=tags.entity.js.map