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
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const curso_service_1 = require("./curso.service");
let CursoController = class CursoController {
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    async getAllCurso() {
        try {
            return await this.cursoService.getAllCurso();
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async getAulaByCursoId(id) {
        try {
            return await this.cursoService.getAulaByCursoId(id);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getAllCurso", null);
__decorate([
    (0, common_1.Get)(':id/aulas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getAulaByCursoId", null);
exports.CursoController = CursoController = __decorate([
    (0, common_1.Controller)('curso'),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoController);
//# sourceMappingURL=curso.controller.js.map