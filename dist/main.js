/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/acl/acl.controller.ts":
/*!***********************************!*\
  !*** ./src/acl/acl.controller.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AclController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acl_service_1 = __webpack_require__(/*! ./acl.service */ "./src/acl/acl.service.ts");
const create_acl_dto_1 = __webpack_require__(/*! ./dto/create-acl.dto */ "./src/acl/dto/create-acl.dto.ts");
const update_acl_dto_1 = __webpack_require__(/*! ./dto/update-acl.dto */ "./src/acl/dto/update-acl.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let AclController = class AclController {
    constructor(aclService) {
        this.aclService = aclService;
    }
    create(createAclDto) {
        return this.aclService.create(createAclDto);
    }
    async findAll() {
        return await this.aclService.findAll();
    }
    async findOne(id) {
        return await this.aclService.findid(id);
    }
    async findslug(slug) {
        return await this.aclService.findslug(slug);
    }
    async findPagination(page, perPage) {
        return await this.aclService.findPagination(page, perPage);
    }
    async findQuery(query) {
        return await this.aclService.findQuery(query);
    }
    update(id, updateAclDto) {
        return this.aclService.update(id, updateAclDto);
    }
    remove(id) {
        return this.aclService.remove(id);
    }
};
exports.AclController = AclController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_acl_dto_1.CreateAclDto !== "undefined" && create_acl_dto_1.CreateAclDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AclController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AclController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AclController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AclController.prototype, "findslug", null);
__decorate([
    (0, common_1.Get)('pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('perPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AclController.prototype, "findPagination", null);
__decorate([
    (0, common_1.Get)('findquery'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AclController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_acl_dto_1.UpdateAclDto !== "undefined" && update_acl_dto_1.UpdateAclDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AclController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AclController.prototype, "remove", null);
exports.AclController = AclController = __decorate([
    (0, swagger_1.ApiTags)('acl'),
    (0, common_1.Controller)('acl'),
    __metadata("design:paramtypes", [typeof (_a = typeof acl_service_1.AclService !== "undefined" && acl_service_1.AclService) === "function" ? _a : Object])
], AclController);


/***/ }),

/***/ "./src/acl/acl.module.ts":
/*!*******************************!*\
  !*** ./src/acl/acl.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AclModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acl_service_1 = __webpack_require__(/*! ./acl.service */ "./src/acl/acl.service.ts");
const acl_controller_1 = __webpack_require__(/*! ./acl.controller */ "./src/acl/acl.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const acl_entity_1 = __webpack_require__(/*! ./entities/acl.entity */ "./src/acl/entities/acl.entity.ts");
let AclModule = class AclModule {
};
exports.AclModule = AclModule;
exports.AclModule = AclModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([acl_entity_1.AclEntity])],
        controllers: [acl_controller_1.AclController],
        providers: [acl_service_1.AclService],
        exports: [acl_service_1.AclService]
    })
], AclModule);


/***/ }),

/***/ "./src/acl/acl.service.ts":
/*!********************************!*\
  !*** ./src/acl/acl.service.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AclService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const acl_entity_1 = __webpack_require__(/*! ./entities/acl.entity */ "./src/acl/entities/acl.entity.ts");
let AclService = class AclService {
    constructor(AclRepository) {
        this.AclRepository = AclRepository;
    }
    async create(CreateAclDto) {
        this.AclRepository.create(CreateAclDto);
        return await this.AclRepository.save(CreateAclDto);
    }
    async findAll() {
        return await this.AclRepository.find();
    }
    async findid(id) {
        return await this.AclRepository.findOne({
            where: { id: id },
        });
    }
    async findslug(slug) {
        return await this.AclRepository.findOne({
            where: { Slug: slug },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.AclRepository.count();
        const acls = await this.AclRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: acls,
        };
    }
    async findQuery(query) {
        return await this.AclRepository.find({
            where: { Title: (0, typeorm_2.Like)(`%query%`) },
        });
    }
    async update(id, UpdateAclDto) {
        this.AclRepository.save(UpdateAclDto);
        return await this.AclRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.AclRepository.delete(id);
        return { deleted: true };
    }
};
exports.AclService = AclService;
exports.AclService = AclService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(acl_entity_1.AclEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AclService);


/***/ }),

/***/ "./src/acl/dto/create-acl.dto.ts":
/*!***************************************!*\
  !*** ./src/acl/dto/create-acl.dto.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAclDto = void 0;
class CreateAclDto {
}
exports.CreateAclDto = CreateAclDto;


/***/ }),

/***/ "./src/acl/dto/update-acl.dto.ts":
/*!***************************************!*\
  !*** ./src/acl/dto/update-acl.dto.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAclDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_acl_dto_1 = __webpack_require__(/*! ./create-acl.dto */ "./src/acl/dto/create-acl.dto.ts");
class UpdateAclDto extends (0, mapped_types_1.PartialType)(create_acl_dto_1.CreateAclDto) {
}
exports.UpdateAclDto = UpdateAclDto;


/***/ }),

/***/ "./src/acl/entities/acl.entity.ts":
/*!****************************************!*\
  !*** ./src/acl/entities/acl.entity.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AclEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let AclEntity = class AclEntity {
};
exports.AclEntity = AclEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AclEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], AclEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], AclEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], AclEntity.prototype, "resourceType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AclEntity.prototype, "resourceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], AclEntity.prototype, "subjectType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AclEntity.prototype, "subjectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'set', enum: ['read', 'write', 'delete'] }),
    __metadata("design:type", Array)
], AclEntity.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], AclEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], AclEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], AclEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AclEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AclEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], AclEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AclEntity.prototype, "idCreate", void 0);
exports.AclEntity = AclEntity = __decorate([
    (0, typeorm_1.Entity)('acl', { orderBy: { CreateAt: 'DESC' } })
], AclEntity);


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
exports.AppController = AppController;
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./src/users/users.module.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const hoadonchitiet_module_1 = __webpack_require__(/*! ./hoadonchitiet/hoadonchitiet.module */ "./src/hoadonchitiet/hoadonchitiet.module.ts");
const todo_module_1 = __webpack_require__(/*! ./todo/todo.module */ "./src/todo/todo.module.ts");
const todocategory_module_1 = __webpack_require__(/*! ./todocategory/todocategory.module */ "./src/todocategory/todocategory.module.ts");
const category_module_1 = __webpack_require__(/*! ./category/category.module */ "./src/category/category.module.ts");
const googledrive_module_1 = __webpack_require__(/*! ./shared/googledrive/googledrive.module */ "./src/shared/googledrive/googledrive.module.ts");
const upload_module_1 = __webpack_require__(/*! ./upload/upload.module */ "./src/upload/upload.module.ts");
const highlight_module_1 = __webpack_require__(/*! ./highlight/highlight.module */ "./src/highlight/highlight.module.ts");
const dexuat_module_1 = __webpack_require__(/*! ./dexuat/dexuat.module */ "./src/dexuat/dexuat.module.ts");
const settings_module_1 = __webpack_require__(/*! ./settings/settings.module */ "./src/settings/settings.module.ts");
const acl_module_1 = __webpack_require__(/*! ./acl/acl.module */ "./src/acl/acl.module.ts");
const conversations_module_1 = __webpack_require__(/*! ./conversations/conversations.module */ "./src/conversations/conversations.module.ts");
const menu_module_1 = __webpack_require__(/*! ./menu/menu.module */ "./src/menu/menu.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '103.221.222.71',
                port: 3306,
                username: 'tazaspac_chikiet',
                password: '@Hikiet88',
                database: 'tazaspac_elasome',
                autoLoadEntities: true,
                synchronize: true,
                charset: "utf8mb4",
            }),
            users_module_1.UsersModule,
            hoadonchitiet_module_1.HoadonchitietModule,
            todo_module_1.TodoModule,
            todocategory_module_1.TodocategoryModule,
            category_module_1.CategoryModule,
            googledrive_module_1.GoogledriveModule,
            upload_module_1.UploadModule,
            highlight_module_1.HighlightModule,
            dexuat_module_1.DexuatModule,
            settings_module_1.SettingModule,
            acl_module_1.AclModule,
            conversations_module_1.ConversationModule,
            menu_module_1.MenuModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    constructor() { }
    async getData() {
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);


/***/ }),

/***/ "./src/category/category.controller.ts":
/*!*********************************************!*\
  !*** ./src/category/category.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./src/category/category.service.ts");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    create(data) {
        return this.categoryService.create(data);
    }
    async findAll() {
        return await this.categoryService.findAll();
    }
    async findOne(id) {
        return await this.categoryService.findid(id);
    }
    async findslug(slug) {
        return await this.categoryService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.categoryService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.categoryService.update(id, data);
    }
    remove(id) {
        return this.categoryService.remove(id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "remove", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);


/***/ }),

/***/ "./src/category/category.module.ts":
/*!*****************************************!*\
  !*** ./src/category/category.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const category_service_1 = __webpack_require__(/*! ./category.service */ "./src/category/category.service.ts");
const category_controller_1 = __webpack_require__(/*! ./category.controller */ "./src/category/category.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const category_entity_1 = __webpack_require__(/*! ./entities/category.entity */ "./src/category/entities/category.entity.ts");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.CategoryEntity]), CategoryModule],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService]
    })
], CategoryModule);


/***/ }),

/***/ "./src/category/category.service.ts":
/*!******************************************!*\
  !*** ./src/category/category.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const category_entity_1 = __webpack_require__(/*! ./entities/category.entity */ "./src/category/entities/category.entity.ts");
let CategoryService = class CategoryService {
    constructor(CategoryRepository) {
        this.CategoryRepository = CategoryRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.CategoryRepository.create(data);
            return await this.CategoryRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.CategoryRepository.find({ where: { isDelete: false } });
    }
    async findid(id) {
        return await this.CategoryRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.CategoryRepository.findOne({
            where: {
                Title: data.Title,
                Type: data.Type
            },
        });
    }
    async findslug(Title) {
        return await this.CategoryRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.CategoryRepository.count();
        const categorys = await this.CategoryRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: categorys,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.CategoryRepository.createQueryBuilder('category');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('category.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('category.Title LIKE :Title', { Title: `%${params.Title}%` });
        }
        if (params.hasOwnProperty('Type')) {
            queryBuilder.andWhere('category.Type LIKE :Type', { Type: `${params.Type}` });
        }
        if (params.hasOwnProperty('idDelete')) {
            queryBuilder.andWhere('category.idDelete LIKE :idDelete', { idDelete: params.idDelete });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, UpdateCategoryDto) {
        await this.CategoryRepository.save(UpdateCategoryDto);
        return await this.CategoryRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.CategoryRepository.delete(id);
        return { deleted: true };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoryService);


/***/ }),

/***/ "./src/category/entities/category.entity.ts":
/*!**************************************************!*\
  !*** ./src/category/entities/category.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let CategoryEntity = class CategoryEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
};
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "idDM", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "idTodo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CategoryEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CategoryEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CategoryEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CategoryEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryEntity.prototype, "checkTitle", null);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)('category', { orderBy: { CreateAt: 'DESC' } })
], CategoryEntity);


/***/ }),

/***/ "./src/conversations/conversation.gateway.ts":
/*!***************************************************!*\
  !*** ./src/conversations/conversation.gateway.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const conversations_service_1 = __webpack_require__(/*! ./conversations.service */ "./src/conversations/conversations.service.ts");
let ConversationGateway = class ConversationGateway {
    constructor(_ConversationService) {
        this._ConversationService = _ConversationService;
    }
    async handleSendMessage(data, client) {
        const message = await this._ConversationService.create(data);
        console.log(data);
        this.server.to(data.idConversation).emit('receiveMessage', message);
    }
    handleJoinChat(idConversation, client) {
        client.join(idConversation);
    }
};
exports.ConversationGateway = ConversationGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], ConversationGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ConversationGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinChat'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ConversationGateway.prototype, "handleJoinChat", null);
exports.ConversationGateway = ConversationGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [typeof (_a = typeof conversations_service_1.ConversationService !== "undefined" && conversations_service_1.ConversationService) === "function" ? _a : Object])
], ConversationGateway);


/***/ }),

/***/ "./src/conversations/conversations.controller.ts":
/*!*******************************************************!*\
  !*** ./src/conversations/conversations.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const conversations_service_1 = __webpack_require__(/*! ./conversations.service */ "./src/conversations/conversations.service.ts");
let ConversationController = class ConversationController {
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    create(data) {
        return this.conversationService.create(data);
    }
    async findAll() {
        return await this.conversationService.findAll();
    }
    async findOne(id) {
        return await this.conversationService.findid(id);
    }
    async findslug(slug) {
        return await this.conversationService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.conversationService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.conversationService.update(id, data);
    }
    remove(id) {
        return this.conversationService.remove(id);
    }
};
exports.ConversationController = ConversationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConversationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ConversationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConversationController.prototype, "remove", null);
exports.ConversationController = ConversationController = __decorate([
    (0, common_1.Controller)('conversation'),
    __metadata("design:paramtypes", [typeof (_a = typeof conversations_service_1.ConversationService !== "undefined" && conversations_service_1.ConversationService) === "function" ? _a : Object])
], ConversationController);


/***/ }),

/***/ "./src/conversations/conversations.module.ts":
/*!***************************************************!*\
  !*** ./src/conversations/conversations.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const conversations_service_1 = __webpack_require__(/*! ./conversations.service */ "./src/conversations/conversations.service.ts");
const conversations_controller_1 = __webpack_require__(/*! ./conversations.controller */ "./src/conversations/conversations.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const conversation_entity_1 = __webpack_require__(/*! ./entities/conversation.entity */ "./src/conversations/entities/conversation.entity.ts");
const conversation_gateway_1 = __webpack_require__(/*! ./conversation.gateway */ "./src/conversations/conversation.gateway.ts");
const users_module_1 = __webpack_require__(/*! src/users/users.module */ "./src/users/users.module.ts");
let ConversationModule = class ConversationModule {
};
exports.ConversationModule = ConversationModule;
exports.ConversationModule = ConversationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([conversation_entity_1.ConversationEntity]),
            ConversationModule,
            users_module_1.UsersModule
        ],
        controllers: [conversations_controller_1.ConversationController],
        providers: [conversation_gateway_1.ConversationGateway, conversations_service_1.ConversationService]
    })
], ConversationModule);


/***/ }),

/***/ "./src/conversations/conversations.service.ts":
/*!****************************************************!*\
  !*** ./src/conversations/conversations.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const conversation_entity_1 = __webpack_require__(/*! ./entities/conversation.entity */ "./src/conversations/entities/conversation.entity.ts");
const users_service_1 = __webpack_require__(/*! src/users/users.service */ "./src/users/users.service.ts");
let ConversationService = class ConversationService {
    constructor(ConversationRepository, _UsersService) {
        this.ConversationRepository = ConversationRepository;
        this._UsersService = _UsersService;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.ConversationRepository.create(data);
            return await this.ConversationRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.ConversationRepository.find({ where: { isDelete: false } });
    }
    async findid(id) {
        return await this.ConversationRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.ConversationRepository.findOne({
            where: {
                timestamp: data.timestamp
            },
        });
    }
    async findslug(timestamp) {
        return await this.ConversationRepository.findOne({
            where: { timestamp: timestamp },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.ConversationRepository.count();
        const conversations = await this.ConversationRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: conversations,
        };
    }
    async findQuery(params) {
        const queryBuilder = this.ConversationRepository.createQueryBuilder('conversation');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('conversation.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('conversation.Title LIKE :Title', { Title: `%${params.Title}%` });
        }
        if (params.hasOwnProperty('Type')) {
            queryBuilder.andWhere('conversation.Type LIKE :Type', { Type: `${params.Type}` });
        }
        if (params.hasOwnProperty('typesearch') && params.typesearch == "OR") {
            if (params.hasOwnProperty('idSender') || params.hasOwnProperty('idReceiver')) {
                queryBuilder.andWhere(new typeorm_2.Brackets((qb) => {
                    if (params.idSender) {
                        qb.orWhere('conversation.idSender LIKE :idSender', { idSender: `${params.idSender}` });
                    }
                    if (params.idReceiver) {
                        qb.orWhere('conversation.idReceiver LIKE :idReceiver', { idReceiver: `${params.idReceiver}` });
                    }
                }));
            }
        }
        else {
            if (params.hasOwnProperty('idSender')) {
                queryBuilder.andWhere('conversation.idSender LIKE :idSender', { idSender: `${params.idSender}` });
            }
            if (params.hasOwnProperty('idReceiver')) {
                queryBuilder.andWhere('conversation.idReceiver LIKE :idReceiver', { idReceiver: `${params.idReceiver}` });
            }
        }
        if (params.hasOwnProperty('idConversation')) {
            queryBuilder.andWhere('conversation.idConversation LIKE :idConversation', { idConversation: `${params.idConversation}` });
        }
        if (params.hasOwnProperty('idDelete')) {
            queryBuilder.andWhere('conversation.idDelete LIKE :idDelete', { idDelete: params.idDelete });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        const usersMap = new Map((await this._UsersService.findAll()).map(user => [user.id, user]));
        items.forEach((item) => {
            item.Sender = usersMap.get(item.idSender) && (({ id, Hoten, email, Avatar }) => ({ id, Hoten, email, Avatar }))(usersMap.get(item.idSender));
            item.Receiver = usersMap.get(item.idReceiver) && (({ id, Hoten, email, Avatar }) => ({ id, Hoten, email, Avatar }))(usersMap.get(item.idReceiver));
        });
        return { items, totalCount };
    }
    async update(id, UpdateConversationDto) {
        await this.ConversationRepository.save(UpdateConversationDto);
        return await this.ConversationRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.ConversationRepository.delete(id);
        return { deleted: true };
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conversation_entity_1.ConversationEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], ConversationService);


/***/ }),

/***/ "./src/conversations/entities/conversation.entity.ts":
/*!***********************************************************!*\
  !*** ./src/conversations/entities/conversation.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ConversationEntity = class ConversationEntity {
    checkTitle() {
        if (!this.message || this.message.trim() === '') {
            this.message = 'No Message';
        }
    }
};
exports.ConversationEntity = ConversationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ConversationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "idConversation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "idSender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "idReceiver", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "attachment", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], ConversationEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ConversationEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ConversationEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ConversationEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ConversationEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ConversationEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConversationEntity.prototype, "checkTitle", null);
exports.ConversationEntity = ConversationEntity = __decorate([
    (0, typeorm_1.Entity)('conversations', { orderBy: { CreateAt: 'DESC' } })
], ConversationEntity);


/***/ }),

/***/ "./src/dexuat/dexuat.controller.ts":
/*!*****************************************!*\
  !*** ./src/dexuat/dexuat.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DexuatController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dexuat_service_1 = __webpack_require__(/*! ./dexuat.service */ "./src/dexuat/dexuat.service.ts");
let DexuatController = class DexuatController {
    constructor(dexuatService) {
        this.dexuatService = dexuatService;
    }
};
exports.DexuatController = DexuatController;
exports.DexuatController = DexuatController = __decorate([
    (0, common_1.Controller)('dexuat'),
    __metadata("design:paramtypes", [typeof (_a = typeof dexuat_service_1.DexuatService !== "undefined" && dexuat_service_1.DexuatService) === "function" ? _a : Object])
], DexuatController);


/***/ }),

/***/ "./src/dexuat/dexuat.module.ts":
/*!*************************************!*\
  !*** ./src/dexuat/dexuat.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DexuatModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dexuat_service_1 = __webpack_require__(/*! ./dexuat.service */ "./src/dexuat/dexuat.service.ts");
const dexuat_controller_1 = __webpack_require__(/*! ./dexuat.controller */ "./src/dexuat/dexuat.controller.ts");
let DexuatModule = class DexuatModule {
};
exports.DexuatModule = DexuatModule;
exports.DexuatModule = DexuatModule = __decorate([
    (0, common_1.Module)({
        controllers: [dexuat_controller_1.DexuatController],
        providers: [dexuat_service_1.DexuatService],
    })
], DexuatModule);


/***/ }),

/***/ "./src/dexuat/dexuat.service.ts":
/*!**************************************!*\
  !*** ./src/dexuat/dexuat.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DexuatService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let DexuatService = class DexuatService {
    create(createDexuatDto) {
        return 'This action adds a new dexuat';
    }
    findAll() {
        return `This action returns all dexuat`;
    }
    findOne(id) {
        return `This action returns a #${id} dexuat`;
    }
    update(id, updateDexuatDto) {
        return `This action updates a #${id} dexuat`;
    }
    remove(id) {
        return `This action removes a #${id} dexuat`;
    }
};
exports.DexuatService = DexuatService;
exports.DexuatService = DexuatService = __decorate([
    (0, common_1.Injectable)()
], DexuatService);


/***/ }),

/***/ "./src/highlight/entities/highlight.entity.ts":
/*!****************************************************!*\
  !*** ./src/highlight/entities/highlight.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let HighlightEntity = class HighlightEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
};
exports.HighlightEntity = HighlightEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HighlightEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "idDM", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Content", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], HighlightEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], HighlightEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], HighlightEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], HighlightEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], HighlightEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], HighlightEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], HighlightEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightEntity.prototype, "checkTitle", null);
exports.HighlightEntity = HighlightEntity = __decorate([
    (0, typeorm_1.Entity)('highlight', { orderBy: { CreateAt: 'DESC' } })
], HighlightEntity);


/***/ }),

/***/ "./src/highlight/highlight.controller.ts":
/*!***********************************************!*\
  !*** ./src/highlight/highlight.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const highlight_service_1 = __webpack_require__(/*! ./highlight.service */ "./src/highlight/highlight.service.ts");
let HighlightController = class HighlightController {
    constructor(highlightService) {
        this.highlightService = highlightService;
    }
    create(data) {
        return this.highlightService.create(data);
    }
    async findAll() {
        return await this.highlightService.findAll();
    }
    async findOne(id) {
        return await this.highlightService.findid(id);
    }
    async findslug(slug) {
        return await this.highlightService.findslug(slug);
    }
    async findQuery(SearchParams) {
        console.log(SearchParams);
        return await this.highlightService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.highlightService.update(id, data);
    }
    remove(id) {
        return this.highlightService.remove(id);
    }
};
exports.HighlightController = HighlightController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HighlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HighlightController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HighlightController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HighlightController.prototype, "remove", null);
exports.HighlightController = HighlightController = __decorate([
    (0, common_1.Controller)('highlight'),
    __metadata("design:paramtypes", [typeof (_a = typeof highlight_service_1.HighlightService !== "undefined" && highlight_service_1.HighlightService) === "function" ? _a : Object])
], HighlightController);


/***/ }),

/***/ "./src/highlight/highlight.module.ts":
/*!*******************************************!*\
  !*** ./src/highlight/highlight.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const highlight_service_1 = __webpack_require__(/*! ./highlight.service */ "./src/highlight/highlight.service.ts");
const highlight_controller_1 = __webpack_require__(/*! ./highlight.controller */ "./src/highlight/highlight.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const highlight_entity_1 = __webpack_require__(/*! ./entities/highlight.entity */ "./src/highlight/entities/highlight.entity.ts");
let HighlightModule = class HighlightModule {
};
exports.HighlightModule = HighlightModule;
exports.HighlightModule = HighlightModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([highlight_entity_1.HighlightEntity]), HighlightModule],
        controllers: [highlight_controller_1.HighlightController],
        providers: [highlight_service_1.HighlightService]
    })
], HighlightModule);


/***/ }),

/***/ "./src/highlight/highlight.service.ts":
/*!********************************************!*\
  !*** ./src/highlight/highlight.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const highlight_entity_1 = __webpack_require__(/*! ./entities/highlight.entity */ "./src/highlight/entities/highlight.entity.ts");
let HighlightService = class HighlightService {
    constructor(HighlightRepository) {
        this.HighlightRepository = HighlightRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.HighlightRepository.create(data);
            return await this.HighlightRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.HighlightRepository.find({ where: { isDelete: false } });
    }
    async findid(id) {
        return await this.HighlightRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.HighlightRepository.findOne({
            where: {
                Title: data.Title,
                Slug: data.Slug
            },
        });
    }
    async findslug(Title) {
        return await this.HighlightRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.HighlightRepository.count();
        const highlights = await this.HighlightRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: highlights,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.HighlightRepository.createQueryBuilder('highlight');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('highlight.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('highlight.Title LIKE :Title', { Title: `%${params.Title}%` });
        }
        if (params.hasOwnProperty('Type')) {
            queryBuilder.andWhere('highlight.Type LIKE :Type', { Type: `%${params.Type}%` });
        }
        if (params.hasOwnProperty('idDM')) {
            queryBuilder.andWhere('highlight.idDM LIKE :idDM', { idDM: `${params.idDM}` });
        }
        if (params.hasOwnProperty('idDelete')) {
            queryBuilder.andWhere('highlight.idDelete LIKE :idDelete', { idDelete: params.idDelete });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        return { items, totalCount };
    }
    async update(id, UpdateHighlightDto) {
        await this.HighlightRepository.save(UpdateHighlightDto);
        return await this.HighlightRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.HighlightRepository.delete(id);
        return { deleted: true };
    }
};
exports.HighlightService = HighlightService;
exports.HighlightService = HighlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(highlight_entity_1.HighlightEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], HighlightService);


/***/ }),

/***/ "./src/hoadonchitiet/entities/hoadonchitiet.entity.ts":
/*!************************************************************!*\
  !*** ./src/hoadonchitiet/entities/hoadonchitiet.entity.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HoadonchitietEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let HoadonchitietEntity = class HoadonchitietEntity {
};
exports.HoadonchitietEntity = HoadonchitietEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "nbmst", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "khmshdon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "khhdon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "shdon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "nbten", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "nbdchi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "nmtnmua", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci', nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "nmdchi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], HoadonchitietEntity.prototype, "tdlap", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", typeof (_b = typeof Number !== "undefined" && Number) === "function" ? _b : Object)
], HoadonchitietEntity.prototype, "tgtcthue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", typeof (_c = typeof Number !== "undefined" && Number) === "function" ? _c : Object)
], HoadonchitietEntity.prototype, "tgtthue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", typeof (_d = typeof Number !== "undefined" && Number) === "function" ? _d : Object)
], HoadonchitietEntity.prototype, "tgtttbso", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "hdhhdvu", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "thlap", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], HoadonchitietEntity.prototype, "idDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], HoadonchitietEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], HoadonchitietEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], HoadonchitietEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], HoadonchitietEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], HoadonchitietEntity.prototype, "idCreate", void 0);
exports.HoadonchitietEntity = HoadonchitietEntity = __decorate([
    (0, typeorm_1.Entity)('hoadonchitiet', { orderBy: { CreateAt: 'DESC' } })
], HoadonchitietEntity);


/***/ }),

/***/ "./src/hoadonchitiet/hoadonchitiet.controller.ts":
/*!*******************************************************!*\
  !*** ./src/hoadonchitiet/hoadonchitiet.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HoadonchitietController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const hoadonchitiet_service_1 = __webpack_require__(/*! ./hoadonchitiet.service */ "./src/hoadonchitiet/hoadonchitiet.service.ts");
let HoadonchitietController = class HoadonchitietController {
    constructor(hoadonchitietService) {
        this.hoadonchitietService = hoadonchitietService;
    }
    create(data) {
        return this.hoadonchitietService.create(data);
    }
    async findAll() {
        return await this.hoadonchitietService.findAll();
    }
    async findOne(id) {
        return await this.hoadonchitietService.findid(id);
    }
    async findslug(slug) {
        return await this.hoadonchitietService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.hoadonchitietService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.hoadonchitietService.update(id, data);
    }
    remove(id) {
        return this.hoadonchitietService.remove(id);
    }
};
exports.HoadonchitietController = HoadonchitietController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HoadonchitietController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HoadonchitietController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HoadonchitietController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HoadonchitietController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HoadonchitietController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HoadonchitietController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HoadonchitietController.prototype, "remove", null);
exports.HoadonchitietController = HoadonchitietController = __decorate([
    (0, common_1.Controller)('hoadonchitiet'),
    __metadata("design:paramtypes", [typeof (_a = typeof hoadonchitiet_service_1.HoadonchitietService !== "undefined" && hoadonchitiet_service_1.HoadonchitietService) === "function" ? _a : Object])
], HoadonchitietController);


/***/ }),

/***/ "./src/hoadonchitiet/hoadonchitiet.module.ts":
/*!***************************************************!*\
  !*** ./src/hoadonchitiet/hoadonchitiet.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HoadonchitietModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const hoadonchitiet_service_1 = __webpack_require__(/*! ./hoadonchitiet.service */ "./src/hoadonchitiet/hoadonchitiet.service.ts");
const hoadonchitiet_controller_1 = __webpack_require__(/*! ./hoadonchitiet.controller */ "./src/hoadonchitiet/hoadonchitiet.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const hoadonchitiet_entity_1 = __webpack_require__(/*! ./entities/hoadonchitiet.entity */ "./src/hoadonchitiet/entities/hoadonchitiet.entity.ts");
let HoadonchitietModule = class HoadonchitietModule {
};
exports.HoadonchitietModule = HoadonchitietModule;
exports.HoadonchitietModule = HoadonchitietModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hoadonchitiet_entity_1.HoadonchitietEntity])],
        controllers: [hoadonchitiet_controller_1.HoadonchitietController],
        providers: [hoadonchitiet_service_1.HoadonchitietService]
    })
], HoadonchitietModule);


/***/ }),

/***/ "./src/hoadonchitiet/hoadonchitiet.service.ts":
/*!****************************************************!*\
  !*** ./src/hoadonchitiet/hoadonchitiet.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HoadonchitietService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const hoadonchitiet_entity_1 = __webpack_require__(/*! ./entities/hoadonchitiet.entity */ "./src/hoadonchitiet/entities/hoadonchitiet.entity.ts");
let HoadonchitietService = class HoadonchitietService {
    constructor(HoadonchitietRepository) {
        this.HoadonchitietRepository = HoadonchitietRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.HoadonchitietRepository.create(data);
            return await this.HoadonchitietRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.HoadonchitietRepository.find();
    }
    async findid(id) {
        return await this.HoadonchitietRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.HoadonchitietRepository.findOne({
            where: {
                nbmst: data.nbmst,
                khmshdon: data.khmshdon,
                khhdon: data.khhdon,
                shdon: data.shdon
            },
        });
    }
    async findslug(Title) {
        return await this.HoadonchitietRepository.findOne({
            where: { shdon: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.HoadonchitietRepository.count();
        const hoadonchitiets = await this.HoadonchitietRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: hoadonchitiets,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.HoadonchitietRepository.createQueryBuilder('hoadonchitiet');
        if (params.Batdau && params.Ketthuc) {
            queryBuilder.andWhere('hoadonchitiet.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.Title) {
            queryBuilder.andWhere('hoadonchitiet.Title LIKE :Title', { SDT: `%${params.Title}%` });
        }
        if (params.thlap) {
            queryBuilder.andWhere('hoadonchitiet.thlap LIKE :thlap', { thlap: `${params.thlap}` });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, UpdateHoadonchitietDto) {
        this.HoadonchitietRepository.save(UpdateHoadonchitietDto);
        return await this.HoadonchitietRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.HoadonchitietRepository.delete(id);
        return { deleted: true };
    }
};
exports.HoadonchitietService = HoadonchitietService;
exports.HoadonchitietService = HoadonchitietService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hoadonchitiet_entity_1.HoadonchitietEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], HoadonchitietService);


/***/ }),

/***/ "./src/menu/entities/menu.entity.ts":
/*!******************************************!*\
  !*** ./src/menu/entities/menu.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let MenuEntity = class MenuEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
};
exports.MenuEntity = MenuEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Style", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Menu", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], MenuEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], MenuEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], MenuEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], MenuEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], MenuEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MenuEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuEntity.prototype, "checkTitle", null);
exports.MenuEntity = MenuEntity = __decorate([
    (0, typeorm_1.Entity)('menu', { orderBy: { CreateAt: 'DESC' } })
], MenuEntity);


/***/ }),

/***/ "./src/menu/menu.controller.ts":
/*!*************************************!*\
  !*** ./src/menu/menu.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const menu_service_1 = __webpack_require__(/*! ./menu.service */ "./src/menu/menu.service.ts");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    create(data) {
        return this.menuService.create(data);
    }
    async findAll() {
        return await this.menuService.findAll();
    }
    async findOne(id) {
        return await this.menuService.findid(id);
    }
    async findslug(slug) {
        return await this.menuService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.menuService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.menuService.update(id, data);
    }
    remove(id) {
        return this.menuService.remove(id);
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "remove", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    __metadata("design:paramtypes", [typeof (_a = typeof menu_service_1.MenuService !== "undefined" && menu_service_1.MenuService) === "function" ? _a : Object])
], MenuController);


/***/ }),

/***/ "./src/menu/menu.module.ts":
/*!*********************************!*\
  !*** ./src/menu/menu.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const menu_service_1 = __webpack_require__(/*! ./menu.service */ "./src/menu/menu.service.ts");
const menu_controller_1 = __webpack_require__(/*! ./menu.controller */ "./src/menu/menu.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const menu_entity_1 = __webpack_require__(/*! ./entities/menu.entity */ "./src/menu/entities/menu.entity.ts");
let MenuModule = class MenuModule {
};
exports.MenuModule = MenuModule;
exports.MenuModule = MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([menu_entity_1.MenuEntity]), MenuModule],
        controllers: [menu_controller_1.MenuController],
        providers: [menu_service_1.MenuService]
    })
], MenuModule);


/***/ }),

/***/ "./src/menu/menu.service.ts":
/*!**********************************!*\
  !*** ./src/menu/menu.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const menu_entity_1 = __webpack_require__(/*! ./entities/menu.entity */ "./src/menu/entities/menu.entity.ts");
let MenuService = class MenuService {
    constructor(MenuRepository) {
        this.MenuRepository = MenuRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.MenuRepository.create(data);
            return await this.MenuRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.MenuRepository.find({ where: { isDelete: false } });
    }
    async findid(id) {
        return await this.MenuRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.MenuRepository.findOne({
            where: {
                Title: data.Title,
                Type: data.Type
            },
        });
    }
    async findslug(Title) {
        return await this.MenuRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.MenuRepository.count();
        const menus = await this.MenuRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: menus,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.MenuRepository.createQueryBuilder('menu');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('menu.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('menu.Title LIKE :Title', { Title: `%${params.Title}%` });
        }
        if (params.hasOwnProperty('Type')) {
            queryBuilder.andWhere('menu.Type LIKE :Type', { Type: `${params.Type}` });
        }
        if (params.hasOwnProperty('idDelete')) {
            queryBuilder.andWhere('menu.idDelete LIKE :idDelete', { idDelete: params.idDelete });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, UpdateMenuDto) {
        await this.MenuRepository.save(UpdateMenuDto);
        return await this.MenuRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.MenuRepository.delete(id);
        return { deleted: true };
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.MenuEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MenuService);


/***/ }),

/***/ "./src/settings/entities/setting.entity.ts":
/*!*************************************************!*\
  !*** ./src/settings/entities/setting.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SettingEntity = class SettingEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
};
exports.SettingEntity = SettingEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SettingEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Field", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Setting", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], SettingEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], SettingEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SettingEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SettingEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SettingEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SettingEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], SettingEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SettingEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SettingEntity.prototype, "checkTitle", null);
exports.SettingEntity = SettingEntity = __decorate([
    (0, typeorm_1.Entity)('setting', { orderBy: { CreateAt: 'DESC' } })
], SettingEntity);


/***/ }),

/***/ "./src/settings/settings.controller.ts":
/*!*********************************************!*\
  !*** ./src/settings/settings.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/settings/settings.service.ts");
let SettingController = class SettingController {
    constructor(settingService) {
        this.settingService = settingService;
    }
    create(data) {
        return this.settingService.create(data);
    }
    async findAll() {
        return await this.settingService.findAll();
    }
    async findOne(id) {
        return await this.settingService.findid(id);
    }
    async findslug(slug) {
        return await this.settingService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.settingService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.settingService.update(id, data);
    }
    remove(id) {
        return this.settingService.remove(id);
    }
};
exports.SettingController = SettingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SettingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SettingController.prototype, "remove", null);
exports.SettingController = SettingController = __decorate([
    (0, common_1.Controller)('setting'),
    __metadata("design:paramtypes", [typeof (_a = typeof settings_service_1.SettingService !== "undefined" && settings_service_1.SettingService) === "function" ? _a : Object])
], SettingController);


/***/ }),

/***/ "./src/settings/settings.module.ts":
/*!*****************************************!*\
  !*** ./src/settings/settings.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/settings/settings.service.ts");
const settings_controller_1 = __webpack_require__(/*! ./settings.controller */ "./src/settings/settings.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const setting_entity_1 = __webpack_require__(/*! ./entities/setting.entity */ "./src/settings/entities/setting.entity.ts");
let SettingModule = class SettingModule {
};
exports.SettingModule = SettingModule;
exports.SettingModule = SettingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([setting_entity_1.SettingEntity]), SettingModule],
        controllers: [settings_controller_1.SettingController],
        providers: [settings_service_1.SettingService]
    })
], SettingModule);


/***/ }),

/***/ "./src/settings/settings.service.ts":
/*!******************************************!*\
  !*** ./src/settings/settings.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const setting_entity_1 = __webpack_require__(/*! ./entities/setting.entity */ "./src/settings/entities/setting.entity.ts");
let SettingService = class SettingService {
    constructor(SettingRepository) {
        this.SettingRepository = SettingRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.SettingRepository.create(data);
            return await this.SettingRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.SettingRepository.find({ where: { isDelete: false } });
    }
    async findid(id) {
        return await this.SettingRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.SettingRepository.findOne({
            where: {
                Title: data.Title,
                Type: data.Type
            },
        });
    }
    async findslug(slug) {
        return await this.SettingRepository.findOne({
            where: { Slug: slug },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.SettingRepository.count();
        const settings = await this.SettingRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: settings,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.SettingRepository.createQueryBuilder('setting');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('setting.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('setting.Title LIKE :Title', { Title: `%${params.Title}%` });
        }
        if (params.hasOwnProperty('Type')) {
            queryBuilder.andWhere('setting.Type LIKE :Type', { Type: `${params.Type}` });
        }
        if (params.hasOwnProperty('idDelete')) {
            queryBuilder.andWhere('setting.idDelete LIKE :idDelete', { idDelete: params.idDelete });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, UpdateSettingDto) {
        await this.SettingRepository.save(UpdateSettingDto);
        return await this.SettingRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        await this.SettingRepository.delete(id);
        return { deleted: true };
    }
};
exports.SettingService = SettingService;
exports.SettingService = SettingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(setting_entity_1.SettingEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SettingService);


/***/ }),

/***/ "./src/shared/googledrive/googledrive.controller.ts":
/*!**********************************************************!*\
  !*** ./src/shared/googledrive/googledrive.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogledriveController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const googledrive_service_1 = __webpack_require__(/*! ./googledrive.service */ "./src/shared/googledrive/googledrive.service.ts");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
let GoogledriveController = class GoogledriveController {
    constructor(googledriveService) {
        this.googledriveService = googledriveService;
    }
    async uploadFile(file, folderId) {
        const result = await this.googledriveService.uploadFileFromBuffer(file, folderId);
        return { fileId: result };
    }
    async getFileList() {
        console.log("Run");
        const res = await this.googledriveService.getFileList();
        console.log(res);
        return res;
    }
    async deleteFile(fileId) {
        const res = await this.googledriveService.deleteFile(fileId);
        return res;
    }
};
exports.GoogledriveController = GoogledriveController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('folderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], GoogledriveController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogledriveController.prototype, "getFileList", null);
__decorate([
    (0, common_1.Delete)(':fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogledriveController.prototype, "deleteFile", null);
exports.GoogledriveController = GoogledriveController = __decorate([
    (0, common_1.Controller)('googledrive'),
    __metadata("design:paramtypes", [typeof (_a = typeof googledrive_service_1.GoogledriveService !== "undefined" && googledrive_service_1.GoogledriveService) === "function" ? _a : Object])
], GoogledriveController);


/***/ }),

/***/ "./src/shared/googledrive/googledrive.module.ts":
/*!******************************************************!*\
  !*** ./src/shared/googledrive/googledrive.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogledriveModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const googledrive_service_1 = __webpack_require__(/*! ./googledrive.service */ "./src/shared/googledrive/googledrive.service.ts");
const googledrive_controller_1 = __webpack_require__(/*! ./googledrive.controller */ "./src/shared/googledrive/googledrive.controller.ts");
let GoogledriveModule = class GoogledriveModule {
};
exports.GoogledriveModule = GoogledriveModule;
exports.GoogledriveModule = GoogledriveModule = __decorate([
    (0, common_1.Module)({
        controllers: [googledrive_controller_1.GoogledriveController],
        providers: [googledrive_service_1.GoogledriveService],
    })
], GoogledriveModule);


/***/ }),

/***/ "./src/shared/googledrive/googledrive.service.ts":
/*!*******************************************************!*\
  !*** ./src/shared/googledrive/googledrive.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogledriveService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const googleapis_1 = __webpack_require__(/*! googleapis */ "googleapis");
const stream_1 = __webpack_require__(/*! stream */ "stream");
let GoogledriveService = class GoogledriveService {
    constructor() {
        const credentials = {
            "type": "service_account",
            "project_id": "speedy-atom-351508",
            "private_key_id": "50528a1b0bb9141e3b8b1043c1b4755f1f24d446",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC9UDDPmXLBx77Q\n16kva+X3ElT/zDF8T1yyDzkF1ngp0K57KkCeqYA1WiCYGuMhwgkmUH/t43kNhv1e\nMG/PMn+xBC17g1aA4JogDkaUsamv8Rv0ng+KSlQnAgxpcLWBy/cROPsd4olR6P41\nywHi5P2AkdFeSnacInIGsX+4INqXqbmbK8XdbUB75yGCfdTbQJxC2HFRmjEgfKtm\n7ZfFVWnBCsd7DpRVgtSzVwa9KMk91WVNcJWWNPvpxm5E86tyz7Ndg5jmQ9UK3ypg\nGv8Op2P/WGykuozIXZmz8LjpEgfeY9/wJE/ZTt6DzGbzm5enxhczqa8A9P7YGvgr\n+BBmuFXxAgMBAAECggEAEhy/fBqMHQJy0lanzwEtkHzBBB4xp9k3Sak6L+xL39hM\nMT14JECcTb5wkDeWU9mqzW8gkOPVZkLBhUbwvkFFxUEHPEzIXxkzYG4X46G3Kz2l\nX+XVdR9/u0xaCqZ9acyCuAjxwZ4LEaVPLloHYAFqSD2V60Wy4Q+h8DEAQrS7T+Iu\nIMGtSrDXY8sGqlOfjWueD6bX43ss2XeDm+hLsbLPjY5Btk8WzhPuFrtppSyTh7Pm\n17EWxoBrj+EsgKGVSForYP5gPsHjpyhjhZ1VtjDlHde9CDCk50JYeF2DBcMeGtiq\n5BA8liqfCZRJv8XozIbRgeKW3ZILDQZep5PAWkfHFwKBgQDp8OvkFPW27rBrz1SH\nuM9ser0AliOsF/aqkiyb7bAL3pYEH7NPGNybBSWZaQaVf/zSc0XCDo/AaQO+cEED\nePHnZHokaXNAJFfwrP7KL46WODqGRkOvmvEewnxWf1W8j60M40VLM9YsTTHcXvhV\nOIdux0Uqw9K7w9Z9CLFzzBSLQwKBgQDPKgCYn82pRsgWWKrVeo5i6/OVYf+z5fmG\nEgw54ZLm79lHNYRP0zUhi1iZmLdOLhsn59O/bNAzmqSNuFGY5//KXDgCiYi6QaX9\nK+8ESOfhBoIzGhHdWfwEKIocEX/7jshyG5WkxZ8+SXB+x1xBl+eohiNBhpSvYVIK\n0kh/3480uwKBgQDaKsHyXNGhnguNHzdXszRNmFE2gM4XqelxvQw5BnsNNrF0exO/\nihIBx9T+soFfXpKquLGvfeD1sXm6WflngZ0nC/8UgfrnMH2Kh+q9J4iz8xAxNMne\ntIJ1Cy7lg66zQNJDmJeAwIDVo9ACEddJsoQq/U81yJV4YfRfeoHy2bm2/QKBgQDN\nNRf+F13LblfI+u/OI2ZjysIwmTCHbSjsi3gc5bt0kuWxyetUfyzEG5oaG9KH2NgB\ngXyYxBrA41BZKdl6E2WneA3rRX1wspLP4/MRVX6Lwry6DfrgPsCLBfU4tIUIFHmt\nvnFPFIsXUfvjOWvDdct9fdHymHMz/r0cBwzVzge2/QKBgQDOfqDetphpmIRqnikw\nudVQ8ry78H4jlHZZaxck5b33O4n4EkjyqDj2KMIu5CnFiWCeVvzltMWZaeo/VX9I\noCjBIZrVZ4ajfb/VGWWEd5qJsiGhFF0R+0KOJhNS/eYeeEwhs7qv8ipH/6QTU37q\nIDqjLGaMGXjwnTBnBU3nBWBQ3w==\n-----END PRIVATE KEY-----\n",
            "client_email": "uploaddrive@speedy-atom-351508.iam.gserviceaccount.com",
            "client_id": "115987672125197354922",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uploaddrive%40speedy-atom-351508.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        };
        const auth = new googleapis_1.google
            .auth
            .GoogleAuth({
            credentials,
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file'
            ]
        });
        this.driveClient = googleapis_1.google.drive({ version: 'v3', auth });
    }
    create(createGoogledriveDto) {
        return 'This action adds a new googledrive';
    }
    findAll() {
        return `This action returns all googledrive`;
    }
    findOne(id) {
        return `This action returns a #${id} googledrive`;
    }
    update(id, updateGoogledriveDto) {
        return `This action updates a #${id} googledrive`;
    }
    remove(id) {
        return `This action removes a #${id} googledrive`;
    }
    async uploadFileFromBuffer(file, folderId) {
        const result = {};
        const fileMetadata = {
            name: file.originalname,
        };
        const bufferStream = new stream_1.PassThrough();
        bufferStream.end(file.buffer);
        if (folderId) {
            fileMetadata.parents = [folderId];
        }
        const media = {
            mimeType: file.mimetype,
            body: bufferStream,
        };
        const response = await this.driveClient.files.create({
            supportsAllDrives: true,
            requestBody: fileMetadata,
            media: media,
            fields: 'id',
        });
        result.fileId = response.data.id;
        result.folderId = folderId;
        const { buffer, ...fileMetadataWithoutBuffer } = file;
        result.Metadata = fileMetadataWithoutBuffer;
        return result;
    }
    async getFileList() {
        const res = await this.driveClient.files.list({});
        return res.data;
    }
    async deleteFile(fileId) {
        return await this
            .driveClient
            .files
            .delete({ fileId });
    }
};
exports.GoogledriveService = GoogledriveService;
exports.GoogledriveService = GoogledriveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogledriveService);


/***/ }),

/***/ "./src/shared/util.ts":
/*!****************************!*\
  !*** ./src/shared/util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TYPE_TEMPLATE = exports.ListNotifyType = exports.ListRole = exports.ListTrangThaiDonhang = exports.ListHinhthucthanhtoan = exports.ListTrangthailichhen = exports.LIST_CHI_NHANH = void 0;
exports.ConvertDriveData = ConvertDriveData;
exports.genMaDonhang = genMaDonhang;
exports.Trangthai_Lichhen = Trangthai_Lichhen;
exports.TYPE_ZNS = TYPE_ZNS;
exports.ZALO_OA = ZALO_OA;
exports.CHI_NHANH = CHI_NHANH;
exports.convertPhoneNum = convertPhoneNum;
exports.Phone_To_0 = Phone_To_0;
exports.nest = nest;
exports.getInitials = getInitials;
exports.convertToSlug = convertToSlug;
exports.GenId = GenId;
exports.mergeNoDup = mergeNoDup;
exports.dateVNPAY = dateVNPAY;
exports.sortObject = sortObject;
exports.groupBy = groupBy;
exports.groupByfield = groupByfield;
exports.flattenData = flattenData;
function ConvertDriveData(data) {
    return data.slice(1).map((row) => {
        return {
            Title: row[0],
            Danhmuc: row[1],
            SKU: row[2],
        };
    });
}
function genMaDonhang(startNumber) {
    let code = startNumber.toString();
    while (code.length < 3) {
        code = "0" + code;
    }
    code = "TGO-AA" + code;
    startNumber++;
    return code;
}
exports.LIST_CHI_NHANH = [
    { id: '268b7a06-d2c5-4c98-af1d-334144ae280f', BranchCode: 'Q_T', idtempdanhgia: '304742', idtemp: '301891', idtoken: '9e148d63-1716-4aa8-b760-ad3700393d4c', idVttech: 3, Title: 'Taza Skin Clinic Gò Vấp' },
    { id: 'f54de1e1-66bd-4690-8015-ad7315d6f14e', BranchCode: 'PVD', idtempdanhgia: '304997', idtemp: '302261', idtoken: '22ddea78-f244-4dea-838a-c4c5d8e40a16', idVttech: 1, Title: 'Taza Skin Clinic Thủ Đức' },
    { id: 'ca725bf4-4810-4ea2-8ef2-520b2a3121cc', BranchCode: 'C_T', idtempdanhgia: '304942', idtemp: '302259', idtoken: 'e4d7426e-53df-4285-be74-aba10259e188', idVttech: 2, Title: 'Taza Skin Clinic Quận 10' },
    { id: 'e173b1c0-fbdb-4eeb-a00c-b56664068515', BranchCode: 'NHH', idtempdanhgia: '305001', idtemp: '303760', idtoken: 'd046cec3-ea49-4117-9a1c-f67959406443', idVttech: 4, Title: 'Taza Skin Clinic Nha Trang' },
    { id: '9887ad61-4b2c-4db1-83e6-570f33cb540a', BranchCode: 'H_V', idtempdanhgia: '304998', idtemp: '302281', idtoken: 'b3b61395-1760-49ae-b5e7-70c310c1c2fb', idVttech: 6, Title: 'Taza Skin Clinic Đà Nẵng' },
    { id: 'ca725bf4-4810-4ea2-8ef2-520b2a3121cc', BranchCode: 'VPC', idtempdanhgia: '304942', idtemp: '302259', idtoken: 'e4d7426e-53df-4285-be74-aba10259e188', idVttech: 7, Title: 'Văn Phòng' },
    { id: '', idtemp: '', idtoken: '', idVttech: 14, Title: 'Timona Academy Quận 10' },
    { id: '', idtemp: '', idtoken: '', idVttech: 15, Title: 'Timona Academy Thủ Đức' },
    { id: '', idtemp: '', idtoken: '', idVttech: 16, Title: 'Timona Academy Gò Vấp' },
    { id: '', idtemp: '', idtoken: '', idVttech: 17, Title: 'Timona Academy Nha Trang' },
    { id: '', idtemp: '', idtoken: '', idVttech: 18, Title: 'Timona Academy Đà Nẵng' },
    { id: '', idtemp: '', idtoken: '', idVttech: 19, Title: 'HR Tazagroup' },
    { id: '', idtemp: '', idtoken: '', idVttech: 20, Title: 'Timona Academy Hà Nội' },
    { id: '', idtemp: '', idtoken: '', idVttech: 21, Title: 'Building Timona CMT8' },
];
exports.ListTrangthailichhen = [
    { id: 0, Title: "Chờ Xác Nhận", Class: "text-yellow-400" },
    { id: 1, Title: "Đã Đặt Lịch", Class: "text-blue-400" },
    { id: 2, Title: "Đã Đến", Class: "text-green-400" },
    { id: 3, Title: "Đang Tham Khám", Class: "text-blue-400" },
    { id: 4, Title: "Đang Tư Vấn", Class: "text-blue-400" },
    { id: 5, Title: "Đang Lên phòng dịch vụ", Class: "text-blue-400" }
];
exports.ListHinhthucthanhtoan = [
    { id: "MOMO", Title: "MOMO", Class: "text-white bg-[#A52167]" },
    { id: "COD", Title: "Tiền Mặt", Class: "text-white bg-[#439c30]" },
    { id: "BANK", Title: "Chuyển Khoản", Class: "text-white bg-[#ED860A]" },
];
exports.ListTrangThaiDonhang = [
    { id: 0, Title: "Đơn Mới", Class: "text-white bg-[#44C8F5]" },
    { id: 1, Title: "Xác Nhận", Class: "text-white bg-[#ED860A]" },
    { id: 2, Title: "Đang xử lý", Class: "text-white bg-[#632B85]" },
    { id: 3, Title: "Đang Giao", Class: "text-white bg-[#FBCD18]" },
    { id: 4, Title: "Hoàn Thành", Class: "text-white bg-[#32A649]" },
    { id: 5, Title: "Huỷ", Class: "text-white bg-[#E1232A]" }
];
exports.ListRole = [
    { id: 'admin', value: 'Admin' },
    { id: 'manager', value: 'Quản Lý' },
    { id: 'user', value: 'Nhân Viên' },
    { id: 'customer', value: 'Khách Hàng' },
    { id: 'nhanvienkho', value: 'Nhân Viên Kho' },
    { id: 'nhanvienbanhang', value: 'Nhân Viên Bán Hàng' },
    { id: 'nhanvienketoan', value: 'Nhân Viên Kế Toán' },
];
exports.ListNotifyType = {
    success: 'check_circle',
    danger: 'dangerous',
    warning: 'warning',
    info: 'info'
};
exports.TYPE_TEMPLATE = {
    user_received_message: "Sự kiện người dùng nhận thông báo ZNS",
    change_template_quota: "Thông báo thay đổi quota mẫu ZNS rủi ro",
    change_template_quality: "Thông báo thay đổi về chất lượng gửi của mẫu tin ZNS",
    change_oa_template_tags: "Thông báo thay đổi về loại nội dung ZNS có thể gửi",
    change_oa_daily_quota: "Thông báo về thay đổi hạn mức gửi ZNS",
    user_feedback: "Sự kiện người dùng phản hồi template đánh giá dịch vụ",
};
function Trangthai_Lichhen(item) {
    const ListType = [
        { id: 0, Title: "Chờ Xác Nhận", Class: "text-yellow-400" },
        { id: 1, Title: "Đã Đặt Lịch", Class: "text-blue-400" },
        { id: 2, Title: "Đã Đến", Class: "text-green-400" },
        { id: 3, Title: "Đang Tham Khám", Class: "text-blue-400" },
        { id: 4, Title: "Đang Tư Vấn", Class: "text-blue-400" },
        { id: 5, Title: "Đang Lên phòng dịch vụ", Class: "text-blue-400" },
    ];
    return ListType.find((v) => v.id == item);
}
function TYPE_ZNS(item) {
    const ListType = {
        user_received_message: "Sự kiện người dùng nhận thông báo ZNS",
        change_template_quota: "Thông báo thay đổi quota mẫu ZNS rủi ro",
        change_template_quality: "Thông báo thay đổi về chất lượng gửi của mẫu tin ZNS",
        change_oa_template_tags: "Thông báo thay đổi về loại nội dung ZNS có thể gửi",
        change_oa_daily_quota: "Thông báo về thay đổi hạn mức gửi ZNS",
        user_feedback: "Sự kiện người dùng phản hồi template đánh giá dịch vụ",
    };
    return ListType[item];
}
function ZALO_OA(item) {
    const ListType = {
        "3605866963832105989": "Taza Skin Clinic Quận 10",
        "4353626177205058888": "Taza Skin Clinic Gò Vấp",
    };
    return ListType[item];
}
function CHI_NHANH(item) {
    const ListType = {
        "268b7a06-d2c5-4c98-af1d-334144ae280f": "Gò Vấp",
        "f54de1e1-66bd-4690-8015-ad7315d6f14e": "Thủ Đức",
        "ca725bf4-4810-4ea2-8ef2-520b2a3121cc": "Quận 10",
        "e173b1c0-fbdb-4eeb-a00c-b56664068515": "Nha Trang",
        "9887ad61-4b2c-4db1-83e6-570f33cb540a": "Đà Nẵng",
        "d516ed9c-5453-4c1e-9c05-40de3cd0e7b1": "Bình Thạnh"
    };
    return ListType[item];
}
function convertPhoneNum(phoneNumber) {
    if (phoneNumber.startsWith("0")) {
        return phoneNumber.replace(/^0/, "84");
    }
    else if (phoneNumber.length === 10) {
        return `84${phoneNumber}`;
    }
    else {
        throw new Error("Invalid phone number format");
    }
}
function Phone_To_0(phoneNumber) {
    if (phoneNumber.startsWith("84")) {
        return "0" + phoneNumber.slice(2);
    }
    else {
        return phoneNumber;
    }
}
function nest(items, id = '', link = 'pid') {
    if (items) {
        return items.filter((item) => item[link] == id)
            .map((item) => ({
            ...item,
            children: nest(items, item.id),
        }));
    }
    ;
}
function getInitials(name) {
    const words = name.split(' ');
    const initials = words.map((word) => word[0].toUpperCase()).join('');
    return initials;
}
function convertToSlug(str) {
    return str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[àáảạãâầấẩậẫăằắẳặẵ]/g, 'a')
        .replace(/[èéẻẹẽêềếểệễ]/g, 'e')
        .replace(/[ìíỉịĩ]/g, 'i')
        .replace(/[òóỏọõôồốổộỗơờớởợỡ]/g, 'o')
        .replace(/[ùúủụũưừứửựữ]/g, 'u')
        .replace(/[ỳýỷỵỹ]/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9-]/g, '');
}
function GenId(length, onlynumber = true) {
    let result = '';
    let characters = '';
    if (onlynumber) {
        characters = '0123456789';
    }
    else {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function mergeNoDup(arr1, arr2, key) {
    const mergedArray = arr1.concat(arr2);
    const uniqueItems = mergedArray.reduce((acc, item) => {
        if (!acc[item[key]]) {
            acc[item[key]] = item;
        }
        return acc;
    }, {});
    return Object.values(uniqueItems);
}
function dateVNPAY(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
    }
    return sorted;
}
function groupBy(data) {
    if (data) {
        return Object.values(data.reduce((result, currentItem) => {
            const group = currentItem.Nhom;
            if (!result[group]) {
                result[group] = { Nhom: group, items: [] };
            }
            result[group].items.push({ id: currentItem.id, Cauhoi: currentItem.Cauhoi, Dapan: currentItem.Dapan });
            return result;
        }, {}));
    }
    else
        return null;
}
;
function groupByfield(data) {
    const convertedData = {};
    data.forEach((item) => {
        const nhomId = item.idSP;
        if (!convertedData[nhomId]) {
            convertedData[nhomId] = {
                idSP: item.idSP,
                children: [],
            };
        }
        const { idSP, ...transitem } = item;
        convertedData[nhomId].children.push(transitem);
    });
    return Object.values(convertedData);
}
;
function flattenData(data) {
    const flattenedData = [];
    data.forEach((item) => {
        flattenedData.push(item);
        if (item.children) {
            flattenedData.push(...flattenData(item.children));
        }
    });
    return flattenedData;
}
;


/***/ }),

/***/ "./src/todo/entities/todo.entity.ts":
/*!******************************************!*\
  !*** ./src/todo/entities/todo.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TodoEntity_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TodoEntity = TodoEntity_1 = class TodoEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
    async setOrdering() {
        const repo = (0, typeorm_1.getRepository)(TodoEntity_1);
        const maxOrdering = await repo
            .createQueryBuilder("todo")
            .select("MAX(todo.Ordering)", "max")
            .getRawOne();
        this.Ordering = (maxOrdering.max || 0) + 1;
    }
};
exports.TodoEntity = TodoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TodoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "idDM", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], TodoEntity.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], TodoEntity.prototype, "attachments", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Content", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TodoEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], TodoEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "Priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TodoEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TodoEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], TodoEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], TodoEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TodoEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoEntity.prototype, "checkTitle", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoEntity.prototype, "setOrdering", null);
exports.TodoEntity = TodoEntity = TodoEntity_1 = __decorate([
    (0, typeorm_1.Entity)('todos', { orderBy: { CreateAt: 'DESC' } })
], TodoEntity);


/***/ }),

/***/ "./src/todo/todo.controller.ts":
/*!*************************************!*\
  !*** ./src/todo/todo.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const todo_service_1 = __webpack_require__(/*! ./todo.service */ "./src/todo/todo.service.ts");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    create(data) {
        return this.todoService.create(data);
    }
    async findAll() {
        return await this.todoService.findAll();
    }
    async findOne(id) {
        return await this.todoService.findid(id);
    }
    async findslug(slug) {
        return await this.todoService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.todoService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.todoService.update(id, data);
    }
    remove(id) {
        return this.todoService.remove(id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "remove", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [typeof (_a = typeof todo_service_1.TodoService !== "undefined" && todo_service_1.TodoService) === "function" ? _a : Object])
], TodoController);


/***/ }),

/***/ "./src/todo/todo.module.ts":
/*!*********************************!*\
  !*** ./src/todo/todo.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const todo_service_1 = __webpack_require__(/*! ./todo.service */ "./src/todo/todo.service.ts");
const todo_controller_1 = __webpack_require__(/*! ./todo.controller */ "./src/todo/todo.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const todo_entity_1 = __webpack_require__(/*! ./entities/todo.entity */ "./src/todo/entities/todo.entity.ts");
let TodoModule = class TodoModule {
};
exports.TodoModule = TodoModule;
exports.TodoModule = TodoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([todo_entity_1.TodoEntity])],
        controllers: [todo_controller_1.TodoController],
        providers: [todo_service_1.TodoService]
    })
], TodoModule);


/***/ }),

/***/ "./src/todo/todo.service.ts":
/*!**********************************!*\
  !*** ./src/todo/todo.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const todo_entity_1 = __webpack_require__(/*! ./entities/todo.entity */ "./src/todo/entities/todo.entity.ts");
let TodoService = class TodoService {
    constructor(TodoRepository) {
        this.TodoRepository = TodoRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.TodoRepository.create(data);
            return await this.TodoRepository.save(data);
        }
        else {
            return { error: 1001, data: 'Trùng Dữ Liệu' };
        }
    }
    async findAll() {
        const result = await this.TodoRepository.find();
        return result;
    }
    async findid(id) {
        const result = await this.TodoRepository.findOne({ where: { id: id } });
        if (result) {
            return result;
        }
        else {
            return { error: 1001, data: 'Không Tồn Tại' };
        }
    }
    async findSHD(data) {
        return await this.TodoRepository.findOne({
            where: {
                Title: data.Title,
                Slug: data.Slug,
            },
        });
    }
    async findslug(Title) {
        return await this.TodoRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.TodoRepository.count();
        const todos = await this.TodoRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: todos,
        };
    }
    async findQuery(params) {
        const queryBuilder = this.TodoRepository.createQueryBuilder('todo');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('todo.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('todo.Title LIKE :Title', {
                SDT: `%${params.Title}%`,
            });
        }
        if (params.hasOwnProperty('idDM')) {
            queryBuilder.andWhere('todo.idDM LIKE :idDM', { idDM: params.idDM });
        }
        if (params.hasOwnProperty('isDelete')) {
            queryBuilder.andWhere('todo.isDelete LIKE :isDelete', {
                isDelete: params.isDelete,
            });
        }
        const [result, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        let items = [];
        if (params.hasOwnProperty('idUser')) {
            items = result.filter((v) => v.idUser.some((v1) => v1.idUser == params.idUser));
        }
        else {
            items = result;
        }
        return { items, totalCount };
    }
    async update(id, UpdateTodoDto) {
        await this.TodoRepository.save(UpdateTodoDto);
        return await this.TodoRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.TodoRepository.delete(id);
        return { deleted: true };
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.TodoEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TodoService);


/***/ }),

/***/ "./src/todocategory/entities/todocategory.entity.ts":
/*!**********************************************************!*\
  !*** ./src/todocategory/entities/todocategory.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodocategoryEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TodocategoryEntity = class TodocategoryEntity {
};
exports.TodocategoryEntity = TodocategoryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "idDM", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], TodocategoryEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TodocategoryEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], TodocategoryEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], TodocategoryEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], TodocategoryEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TodocategoryEntity.prototype, "idCreate", void 0);
exports.TodocategoryEntity = TodocategoryEntity = __decorate([
    (0, typeorm_1.Entity)('todocategory', { orderBy: { CreateAt: 'DESC' } })
], TodocategoryEntity);


/***/ }),

/***/ "./src/todocategory/todocategory.controller.ts":
/*!*****************************************************!*\
  !*** ./src/todocategory/todocategory.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodocategoryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const todocategory_service_1 = __webpack_require__(/*! ./todocategory.service */ "./src/todocategory/todocategory.service.ts");
let TodocategoryController = class TodocategoryController {
    constructor(todocategoryService) {
        this.todocategoryService = todocategoryService;
    }
    create(data) {
        return this.todocategoryService.create(data);
    }
    async findAll() {
        return await this.todocategoryService.findAll();
    }
    async findOne(id) {
        return await this.todocategoryService.findid(id);
    }
    async findslug(slug) {
        return await this.todocategoryService.findslug(slug);
    }
    async findQuery(SearchParams) {
        return await this.todocategoryService.findQuery(SearchParams);
    }
    update(id, data) {
        return this.todocategoryService.update(id, data);
    }
    remove(id) {
        return this.todocategoryService.remove(id);
    }
};
exports.TodocategoryController = TodocategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodocategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodocategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodocategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodocategoryController.prototype, "findslug", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodocategoryController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodocategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodocategoryController.prototype, "remove", null);
exports.TodocategoryController = TodocategoryController = __decorate([
    (0, common_1.Controller)('todocategory'),
    __metadata("design:paramtypes", [typeof (_a = typeof todocategory_service_1.TodocategoryService !== "undefined" && todocategory_service_1.TodocategoryService) === "function" ? _a : Object])
], TodocategoryController);


/***/ }),

/***/ "./src/todocategory/todocategory.module.ts":
/*!*************************************************!*\
  !*** ./src/todocategory/todocategory.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodocategoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const todocategory_service_1 = __webpack_require__(/*! ./todocategory.service */ "./src/todocategory/todocategory.service.ts");
const todocategory_controller_1 = __webpack_require__(/*! ./todocategory.controller */ "./src/todocategory/todocategory.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const todocategory_entity_1 = __webpack_require__(/*! ./entities/todocategory.entity */ "./src/todocategory/entities/todocategory.entity.ts");
let TodocategoryModule = class TodocategoryModule {
};
exports.TodocategoryModule = TodocategoryModule;
exports.TodocategoryModule = TodocategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([todocategory_entity_1.TodocategoryEntity])],
        controllers: [todocategory_controller_1.TodocategoryController],
        providers: [todocategory_service_1.TodocategoryService]
    })
], TodocategoryModule);


/***/ }),

/***/ "./src/todocategory/todocategory.service.ts":
/*!**************************************************!*\
  !*** ./src/todocategory/todocategory.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodocategoryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const todocategory_entity_1 = __webpack_require__(/*! ./entities/todocategory.entity */ "./src/todocategory/entities/todocategory.entity.ts");
let TodocategoryService = class TodocategoryService {
    constructor(TodocategoryRepository) {
        this.TodocategoryRepository = TodocategoryRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.TodocategoryRepository.create(data);
            return await this.TodocategoryRepository.save(data);
        }
        else {
            return { error: 1001, data: "Trùng Dữ Liệu" };
        }
    }
    async findAll() {
        return await this.TodocategoryRepository.find();
    }
    async findid(id) {
        return await this.TodocategoryRepository.findOne({ where: { id: id } });
    }
    async findSHD(data) {
        return await this.TodocategoryRepository.findOne({
            where: {
                Title: data.Title,
                Type: data.Type
            },
        });
    }
    async findslug(Title) {
        return await this.TodocategoryRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.TodocategoryRepository.count();
        const todocategorys = await this.TodocategoryRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: todocategorys,
        };
    }
    async findQuery(params) {
        console.error(params);
        const queryBuilder = this.TodocategoryRepository.createQueryBuilder('todocategory');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('todocategory.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('todocategory.Title LIKE :Title', { SDT: `%${params.Title}%` });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, UpdateTodocategoryDto) {
        this.TodocategoryRepository.save(UpdateTodocategoryDto);
        return await this.TodocategoryRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.TodocategoryRepository.delete(id);
        return { deleted: true };
    }
};
exports.TodocategoryService = TodocategoryService;
exports.TodocategoryService = TodocategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todocategory_entity_1.TodocategoryEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TodocategoryService);


/***/ }),

/***/ "./src/upload/entities/upload.entity.ts":
/*!**********************************************!*\
  !*** ./src/upload/entities/upload.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UploadEntity = class UploadEntity {
    checkTitle() {
        if (!this.Title || this.Title.trim() === '') {
            this.Title = 'Noname';
        }
    }
};
exports.UploadEntity = UploadEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UploadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "fileid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "folderid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "filepath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Lienket", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Alt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', collation: 'utf8_general_ci' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], UploadEntity.prototype, "SEO", void 0);
__decorate([
    (0, typeorm_1.Column)({ collation: "utf8_general_ci", type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Schema", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UploadEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], UploadEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UploadEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UploadEntity.prototype, "isDelete", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UploadEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UploadEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UploadEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UploadEntity.prototype, "idCreate", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadEntity.prototype, "checkTitle", null);
exports.UploadEntity = UploadEntity = __decorate([
    (0, typeorm_1.Entity)('upload', { orderBy: { CreateAt: 'DESC' } })
], UploadEntity);


/***/ }),

/***/ "./src/upload/upload.controller.ts":
/*!*****************************************!*\
  !*** ./src/upload/upload.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const upload_service_1 = __webpack_require__(/*! ./upload.service */ "./src/upload/upload.service.ts");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const googledrive_service_1 = __webpack_require__(/*! src/shared/googledrive/googledrive.service */ "./src/shared/googledrive/googledrive.service.ts");
const multer_1 = __webpack_require__(/*! multer */ "multer");
const path = __webpack_require__(/*! path */ "path");
const fs = __webpack_require__(/*! fs */ "fs");
let UploadController = class UploadController {
    constructor(uploadService, googledriveService) {
        this.uploadService = uploadService;
        this.googledriveService = googledriveService;
    }
    async uploadFileLocal(file, folder) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        const filePath = folder ? `/${folder}/${file.filename}` : `/${file.filename}`;
        const Image = {
            Title: file.originalname,
            Metadata: {
                size: file.size,
                mimetype: file.mimetype,
                originalname: file.originalname,
                filename: file.filename,
            },
            filepath: filePath,
            Lienket: `/images${filePath}`,
            Type: 'local',
        };
        const reponse = await this.uploadService.create(Image);
        return reponse;
    }
    async uploadFile(file, folderId) {
        const result = await this.googledriveService.uploadFileFromBuffer(file, folderId);
        const data = {
            Title: file.originalname,
            fileId: result?.fileId,
            folderId: result?.folderId,
            Metadata: result?.Metadata,
            Type: 'googledrive',
        };
        const reponse = await this.uploadService.create(data);
        return reponse;
    }
    findAll() {
        return this.uploadService.findAll();
    }
    update(id, data) {
        return this.uploadService.update(id, data);
    }
    remove(id) {
        return this.uploadService.remove(id);
    }
    async deleteFile(folder, filename, res) {
        const filePath = path.join(__dirname, '../../sandbox/images', folder, filename);
        if (!fs.existsSync(filePath)) {
            throw new common_1.HttpException('File not found', common_1.HttpStatus.NOT_FOUND);
        }
        fs.unlink(filePath, (err) => {
            if (err) {
                throw new common_1.HttpException('Error deleting file', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return res.json();
        });
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(':folder*'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const folderPath = path.join(__dirname, '../../sandbox/images', req.params.folder || '');
                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true });
                }
                cb(null, folderPath);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = path.parse(file.originalname).name + '-' + Date.now();
                const ext = path.extname(file.originalname);
                cb(null, `${uniqueSuffix}${ext}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof Express !== "undefined" && (_c = Express.Multer) !== void 0 && _c.File) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFileLocal", null);
__decorate([
    (0, common_1.Post)('googledrive'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('folderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof Express !== "undefined" && (_e = Express.Multer) !== void 0 && _e.File) === "function" ? _f : Object, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(':folder*/:filename'),
    __param(0, (0, common_1.Param)('folder')),
    __param(1, (0, common_1.Param)('filename')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_g = typeof Response !== "undefined" && Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "deleteFile", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" ? _a : Object, typeof (_b = typeof googledrive_service_1.GoogledriveService !== "undefined" && googledrive_service_1.GoogledriveService) === "function" ? _b : Object])
], UploadController);


/***/ }),

/***/ "./src/upload/upload.module.ts":
/*!*************************************!*\
  !*** ./src/upload/upload.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const upload_service_1 = __webpack_require__(/*! ./upload.service */ "./src/upload/upload.service.ts");
const upload_controller_1 = __webpack_require__(/*! ./upload.controller */ "./src/upload/upload.controller.ts");
const googledrive_service_1 = __webpack_require__(/*! src/shared/googledrive/googledrive.service */ "./src/shared/googledrive/googledrive.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const upload_entity_1 = __webpack_require__(/*! ./entities/upload.entity */ "./src/upload/entities/upload.entity.ts");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([upload_entity_1.UploadEntity])],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService, googledrive_service_1.GoogledriveService],
    })
], UploadModule);


/***/ }),

/***/ "./src/upload/upload.service.ts":
/*!**************************************!*\
  !*** ./src/upload/upload.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const upload_entity_1 = __webpack_require__(/*! ./entities/upload.entity */ "./src/upload/entities/upload.entity.ts");
let UploadService = class UploadService {
    constructor(UploadRepository) {
        this.UploadRepository = UploadRepository;
    }
    async create(data) {
        const check = await this.findSHD(data);
        if (!check) {
            this.UploadRepository.create(data);
            return await this.UploadRepository.save(data);
        }
        else {
            return { error: 1001, data: 'Trùng Dữ Liệu' };
        }
    }
    async findAll() {
        const result = await this.UploadRepository.find();
        return result;
    }
    async findid(id) {
        const result = await this.UploadRepository.findOne({ where: { id: id } });
        if (result) {
            return result;
        }
        else {
            return { error: 1001, data: 'Không Tồn Tại' };
        }
    }
    async findSHD(data) {
        const result = await this.UploadRepository
            .createQueryBuilder('upload')
            .where("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.size')) = :size", { size: data.Metadata.size })
            .andWhere("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.mimetype')) = :mimetype", { mimetype: data.Metadata.mimetype })
            .andWhere("JSON_UNQUOTE(JSON_EXTRACT(upload.Metadata, '$.originalname')) = :originalname", { originalname: data.Metadata.originalname })
            .getOne();
        return result;
    }
    async findslug(Title) {
        return await this.UploadRepository.findOne({
            where: { Title: Title },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.UploadRepository.count();
        const uploads = await this.UploadRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: uploads,
        };
    }
    async findQuery(params) {
        const queryBuilder = this.UploadRepository.createQueryBuilder('upload');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('upload.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('upload.Title LIKE :Title', {
                SDT: `%${params.Title}%`,
            });
        }
        if (params.hasOwnProperty('idDM')) {
            queryBuilder.andWhere('upload.idDM LIKE :idDM', { idDM: params.idDM });
        }
        if (params.hasOwnProperty('isDelete')) {
            queryBuilder.andWhere('upload.isDelete LIKE :isDelete', {
                isDelete: params.isDelete,
            });
        }
        const [result, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        let items = [];
        if (params.hasOwnProperty('idUser')) {
            items = result.filter((v) => v.idUser.some((v1) => v1.idUser == params.idUser));
        }
        else {
            items = result;
        }
        return { items, totalCount };
    }
    async update(id, UpdateUploadDto) {
        await this.UploadRepository.save(UpdateUploadDto);
        return await this.UploadRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.UploadRepository.delete(id);
        return { deleted: true };
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(upload_entity_1.UploadEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UploadService);


/***/ }),

/***/ "./src/usergroup/dto/create-usergroup.dto.ts":
/*!***************************************************!*\
  !*** ./src/usergroup/dto/create-usergroup.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsergroupDto = void 0;
class CreateUsergroupDto {
}
exports.CreateUsergroupDto = CreateUsergroupDto;


/***/ }),

/***/ "./src/usergroup/dto/update-usergroup.dto.ts":
/*!***************************************************!*\
  !*** ./src/usergroup/dto/update-usergroup.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsergroupDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_usergroup_dto_1 = __webpack_require__(/*! ./create-usergroup.dto */ "./src/usergroup/dto/create-usergroup.dto.ts");
class UpdateUsergroupDto extends (0, mapped_types_1.PartialType)(create_usergroup_dto_1.CreateUsergroupDto) {
}
exports.UpdateUsergroupDto = UpdateUsergroupDto;


/***/ }),

/***/ "./src/usergroup/entities/usergroup.entity.ts":
/*!****************************************************!*\
  !*** ./src/usergroup/entities/usergroup.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsergroupEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UsergroupEntity = class UsergroupEntity {
};
exports.UsergroupEntity = UsergroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "idDM", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "Mota", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "Slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('{}')" }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "Image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "ListMenu", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], UsergroupEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UsergroupEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UsergroupEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UsergroupEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UsergroupEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UsergroupEntity.prototype, "idCreate", void 0);
exports.UsergroupEntity = UsergroupEntity = __decorate([
    (0, typeorm_1.Entity)('usergroup', { orderBy: { CreateAt: 'DESC' } })
], UsergroupEntity);


/***/ }),

/***/ "./src/usergroup/usergroup.controller.ts":
/*!***********************************************!*\
  !*** ./src/usergroup/usergroup.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsergroupController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const usergroup_service_1 = __webpack_require__(/*! ./usergroup.service */ "./src/usergroup/usergroup.service.ts");
const create_usergroup_dto_1 = __webpack_require__(/*! ./dto/create-usergroup.dto */ "./src/usergroup/dto/create-usergroup.dto.ts");
const update_usergroup_dto_1 = __webpack_require__(/*! ./dto/update-usergroup.dto */ "./src/usergroup/dto/update-usergroup.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UsergroupController = class UsergroupController {
    constructor(usergroupService) {
        this.usergroupService = usergroupService;
    }
    create(createUsergroupDto) {
        return this.usergroupService.create(createUsergroupDto);
    }
    async findAll() {
        return await this.usergroupService.findAll();
    }
    async findOne(id) {
        return await this.usergroupService.findid(id);
    }
    async findslug(slug) {
        return await this.usergroupService.findslug(slug);
    }
    async findPagination(page, perPage) {
        return await this.usergroupService.findPagination(page, perPage);
    }
    async findQuery(query) {
        return await this.usergroupService.findQuery(query);
    }
    update(id, updateUsergroupDto) {
        return this.usergroupService.update(id, updateUsergroupDto);
    }
    remove(id) {
        return this.usergroupService.remove(id);
    }
};
exports.UsergroupController = UsergroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_usergroup_dto_1.CreateUsergroupDto !== "undefined" && create_usergroup_dto_1.CreateUsergroupDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsergroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsergroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsergroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findslug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsergroupController.prototype, "findslug", null);
__decorate([
    (0, common_1.Get)('pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('perPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsergroupController.prototype, "findPagination", null);
__decorate([
    (0, common_1.Get)('findquery'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsergroupController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_usergroup_dto_1.UpdateUsergroupDto !== "undefined" && update_usergroup_dto_1.UpdateUsergroupDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsergroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsergroupController.prototype, "remove", null);
exports.UsergroupController = UsergroupController = __decorate([
    (0, swagger_1.ApiTags)('usergroup'),
    (0, common_1.Controller)('usergroup'),
    __metadata("design:paramtypes", [typeof (_a = typeof usergroup_service_1.UsergroupService !== "undefined" && usergroup_service_1.UsergroupService) === "function" ? _a : Object])
], UsergroupController);


/***/ }),

/***/ "./src/usergroup/usergroup.module.ts":
/*!*******************************************!*\
  !*** ./src/usergroup/usergroup.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsergroupModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const usergroup_service_1 = __webpack_require__(/*! ./usergroup.service */ "./src/usergroup/usergroup.service.ts");
const usergroup_controller_1 = __webpack_require__(/*! ./usergroup.controller */ "./src/usergroup/usergroup.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usergroup_entity_1 = __webpack_require__(/*! ./entities/usergroup.entity */ "./src/usergroup/entities/usergroup.entity.ts");
let UsergroupModule = class UsergroupModule {
};
exports.UsergroupModule = UsergroupModule;
exports.UsergroupModule = UsergroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usergroup_entity_1.UsergroupEntity])],
        controllers: [usergroup_controller_1.UsergroupController],
        providers: [usergroup_service_1.UsergroupService],
        exports: [usergroup_service_1.UsergroupService]
    })
], UsergroupModule);


/***/ }),

/***/ "./src/usergroup/usergroup.service.ts":
/*!********************************************!*\
  !*** ./src/usergroup/usergroup.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsergroupService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const usergroup_entity_1 = __webpack_require__(/*! ./entities/usergroup.entity */ "./src/usergroup/entities/usergroup.entity.ts");
let UsergroupService = class UsergroupService {
    constructor(UsergroupRepository) {
        this.UsergroupRepository = UsergroupRepository;
    }
    async create(CreateUsergroupDto) {
        this.UsergroupRepository.create(CreateUsergroupDto);
        return await this.UsergroupRepository.save(CreateUsergroupDto);
    }
    async findAll() {
        return await this.UsergroupRepository.find();
    }
    async findid(id) {
        return await this.UsergroupRepository.findOne({
            where: { id: id },
        });
    }
    async findslug(slug) {
        return await this.UsergroupRepository.findOne({
            where: { Slug: slug },
        });
    }
    async findPagination(page, perPage) {
        const skip = (page - 1) * perPage;
        const totalItems = await this.UsergroupRepository.count();
        const usergroups = await this.UsergroupRepository.find({ skip, take: perPage });
        return {
            currentPage: page,
            perPage,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            data: usergroups,
        };
    }
    async findQuery(query) {
        return await this.UsergroupRepository.find({
            where: { Title: (0, typeorm_2.Like)(`%query%`) },
        });
    }
    async update(id, UpdateUsergroupDto) {
        this.UsergroupRepository.save(UpdateUsergroupDto);
        return await this.UsergroupRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        console.error(id);
        await this.UsergroupRepository.delete(id);
        return { deleted: true };
    }
};
exports.UsergroupService = UsergroupService;
exports.UsergroupService = UsergroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usergroup_entity_1.UsergroupEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsergroupService);


/***/ }),

/***/ "./src/users/dto/create-user.dto.ts":
/*!******************************************!*\
  !*** ./src/users/dto/create-user.dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Action = exports.Role = exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Manager"] = "manager";
    Role["User"] = "user";
    Role["Dev"] = "dev";
    Role["Iso"] = "iso";
    Role["Customer"] = "customer";
})(Role || (exports.Role = Role = {}));
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action || (exports.Action = Action = {}));


/***/ }),

/***/ "./src/users/dto/update-user.dto.ts":
/*!******************************************!*\
  !*** ./src/users/dto/update-user.dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/users/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/users/entities/jwt.strategy.ts":
/*!********************************************!*\
  !*** ./src/users/entities/jwt.strategy.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const users_service_1 = __webpack_require__(/*! ../users.service */ "./src/users/users.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'websitetoken') {
    constructor(_UsersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "websitetoken"
        });
        this._UsersService = _UsersService;
    }
    async validate(payload) {
        const data = await this._UsersService.findbyEmail(payload);
        payload.roles = data?.Role;
        return payload;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/users/entities/local.strategy.ts":
/*!**********************************************!*\
  !*** ./src/users/entities/local.strategy.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ../users.service */ "./src/users/users.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(_UsersService) {
        super();
        this._UsersService = _UsersService;
    }
    async validate(user) {
        const data = await this._UsersService.validateUser(user);
        if (!data) {
            throw new common_1.UnauthorizedException();
        }
        return data;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/users/entities/roles.decorator.ts":
/*!***********************************************!*\
  !*** ./src/users/entities/roles.decorator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),

/***/ "./src/users/entities/roles.guard.ts":
/*!*******************************************!*\
  !*** ./src/users/entities/roles.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.get('roles', context.getHandler());
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return user && user.roles && requiredRoles.some((role) => user.roles.includes(role));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),

/***/ "./src/users/entities/user.entity.ts":
/*!*******************************************!*\
  !*** ./src/users/entities/user.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const create_user_dto_1 = __webpack_require__(/*! ../dto/create-user.dto */ "./src/users/dto/create-user.dto.ts");
let UsersEntity = class UsersEntity {
};
exports.UsersEntity = UsersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: '0' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "ref_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "gid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "fid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "zid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "pid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "SDT", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "idGroup", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "Code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "Hoten", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "Avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UsersEntity.prototype, "Ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Gioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "EditChinhanhs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Diachi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "ListImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: create_user_dto_1.Role, default: create_user_dto_1.Role.User }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Phanquyen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", default: () => "('[]')" }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Menu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array" }),
    __metadata("design:type", Array)
], UsersEntity.prototype, "fcmToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "Type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "Ordering", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "idDelete", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UsersEntity.prototype, "CreateAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UsersEntity.prototype, "UpdateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UsersEntity.prototype, "DeleteAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "idCreate", void 0);
exports.UsersEntity = UsersEntity = __decorate([
    (0, typeorm_1.Entity)('users', { orderBy: { CreateAt: 'DESC' } })
], UsersEntity);


/***/ }),

/***/ "./src/users/users.controller.ts":
/*!***************************************!*\
  !*** ./src/users/users.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/users/dto/create-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/users/dto/update-user.dto.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const usergroup_service_1 = __webpack_require__(/*! src/usergroup/usergroup.service */ "./src/usergroup/usergroup.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const roles_guard_1 = __webpack_require__(/*! ./entities/roles.guard */ "./src/users/entities/roles.guard.ts");
const roles_decorator_1 = __webpack_require__(/*! ./entities/roles.decorator */ "./src/users/entities/roles.decorator.ts");
let UsersController = class UsersController {
    constructor(usersService, _UsergroupService) {
        this.usersService = usersService;
        this._UsergroupService = _UsergroupService;
    }
    async login(user) {
        return await this.usersService.login(user);
    }
    async loginbygoogle(user) {
        return await this.usersService.loginsocial(user);
    }
    async randompass(dulieu) {
        return await this.randompass(dulieu);
    }
    async getProfile(req) {
        const userPromise = this.usersService.findbyEmail(req.user);
        const groupsPromise = this._UsergroupService.findAll();
        const [user, Groups] = await Promise.all([userPromise, groupsPromise]);
        if (user) {
            delete user.password;
            user['Groups'] = Groups.find((v) => v.id == user.idGroup)?.ListMenu;
            return user;
        }
        else {
            return false;
        }
    }
    async create(createUserDto) {
        console.log(createUserDto);
        const newUser = await this.usersService.create(createUserDto);
        if (newUser[0]) {
            return [true, 'Đăng Ký Thành Công'];
        }
        else {
            return newUser;
        }
    }
    async checksocial(data) {
        const newUser = await this.usersService.loginsocial(data);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.read(id);
    }
    async findid(id) {
        const user = await this.usersService.findid(id);
        const Groups = await this._UsergroupService.findAll();
        user['Groups'] = Groups.find((v) => v.id == user.idGroup)?.ListMenu;
        return user;
    }
    async findSDT(sdt) {
        const user = await this.usersService.findSDT(sdt);
        const Groups = await this._UsergroupService.findAll();
        user['Groups'] = Groups.find((v) => v.id == user.idGroup);
        return user;
    }
    findAdmin() {
        return this.usersService.findAdmin();
    }
    async findQuery(SearchParams) {
        console.log(SearchParams);
        return await this.usersService.findQuery(SearchParams);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    changepass(data) {
        return this.usersService.changepass(data);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('loginbygoogle'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginbygoogle", null);
__decorate([
    (0, common_1.Post)('randompass'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "randompass", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('websitetoken')),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("checksocial"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checksocial", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('websitetoken'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('findid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findid", null);
__decorate([
    (0, common_1.Get)('SDT/:sdt'),
    __param(0, (0, common_1.Param)('sdt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findSDT", null);
__decorate([
    (0, common_1.Get)('/get/admin'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('websitetoken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAdmin", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('changepass'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changepass", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof usergroup_service_1.UsergroupService !== "undefined" && usergroup_service_1.UsergroupService) === "function" ? _b : Object])
], UsersController);


/***/ }),

/***/ "./src/users/users.module.ts":
/*!***********************************!*\
  !*** ./src/users/users.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/users/users.controller.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/users/entities/user.entity.ts");
const usergroup_module_1 = __webpack_require__(/*! src/usergroup/usergroup.module */ "./src/usergroup/usergroup.module.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const jwt_strategy_1 = __webpack_require__(/*! ./entities/jwt.strategy */ "./src/users/entities/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./entities/local.strategy */ "./src/users/entities/local.strategy.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UsersEntity]),
            passport_1.PassportModule,
            usergroup_module_1.UsergroupModule,
            jwt_1.JwtModule.register({
                secret: 'websitetoken',
                signOptions: { expiresIn: '30days' },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy],
        exports: [users_service_1.UsersService]
    })
], UsersModule);


/***/ }),

/***/ "./src/users/users.service.ts":
/*!************************************!*\
  !*** ./src/users/users.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/users/entities/user.entity.ts");
const util_1 = __webpack_require__(/*! src/shared/util */ "./src/shared/util.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async login(data) {
        const CheckSDT = await this.findbySDT(data);
        const CheckEmail = await this.findbyEmail(data);
        let user = CheckSDT || CheckEmail;
        if (!user) {
            return [404, 'Số Điện Thoại Hoặc Email Chưa Đăng Ký'];
        }
        else {
            const compare = await bcrypt.compare(data.password, user.password);
            if (!compare) {
                return [401, 'Sai Mật Khẩu'];
            }
            else {
                const doLogin = {
                    access_token: this.jwtService.sign({
                        SDT: data.SDT,
                        email: data.email,
                    }),
                    data,
                };
                return [200, doLogin];
            }
        }
    }
    async loginsocial(data) {
        const userByEmail = await this.usersRepository.findOne({
            where: { email: data.email },
        });
        const userByGid = await this.usersRepository.findOne({
            where: { gid: data.uid },
        });
        let user = userByGid || userByEmail;
        if (user) {
            if (!user.gid) {
                user.gid = data.uid;
                await this.usersRepository.save(user);
            }
            const token = this.jwtService.sign({
                SDT: user.SDT,
                email: user.email,
                gid: user.gid,
            });
            return [true, { access_token: token, user }];
        }
        data.gid = data.uid;
        data.password = await bcrypt.hash((0, util_1.GenId)(8, false), 10);
        data.Code = Math.floor(100000 + Math.random() * 900000);
        const newUser = await this.usersRepository.save(this.usersRepository.create(data));
        const token = this.jwtService.sign({
            SDT: newUser.SDT,
            email: newUser.email,
            gid: newUser.gid,
        });
        return [true, { access_token: token, newUser }];
    }
    async randompass(data) {
        const user = await this.findbySDT(data);
        const random = Math.random().toString(36).slice(-8);
        user.password = await bcrypt.hash(random, 10);
        const result = await this.update(user.id, user);
        return [true, random];
    }
    async validateUser(user) {
        const data = await this.findbySDT(user);
        const compare = await bcrypt.compare(user.password, data.password);
        if (data && compare) {
            console.log(data);
        }
        return null;
    }
    async create(data) {
        const checkSDT = await this.findbySDT(data);
        const checkEmail = await this.findbyEmail(data);
        console.log(checkSDT);
        if (checkSDT) {
            return [false, 'Số Điện Thoại Đã Tồn Tại'];
        }
        if (checkEmail) {
            return [false, 'Email Đã Tồn Tại'];
        }
        data.password = await bcrypt.hash(data.password, 10);
        const validationCode = Math.floor(100000 + Math.random() * 900000);
        data.Code = validationCode;
        this.usersRepository.create(data);
        const newUser = await this.usersRepository.save(data);
        return [true, newUser];
    }
    async findAll() {
        const users = await this.usersRepository.find();
        return users;
    }
    async read(id) {
        return await this.usersRepository.findOne({ where: { id: id } });
    }
    async findid(id) {
        return await this.usersRepository.findOne({ where: { id: id } });
    }
    async findSDT(sdt) {
        return await this.usersRepository.findOne({
            where: { SDT: sdt },
        });
    }
    async findbySDT(data) {
        if (data.SDT) {
            return await this.usersRepository.findOne({ where: { SDT: data.SDT } });
        }
        else
            return null;
    }
    async findbyEmail(data) {
        if (data.email) {
            return await this.usersRepository.findOne({
                where: { email: data.email },
            });
        }
        else
            return null;
    }
    async findAdmin() {
        const admin = await this.usersRepository.find({ where: { Role: 'admin' } });
        return admin;
    }
    async findQuery(params) {
        const queryBuilder = this.usersRepository.createQueryBuilder('users');
        if (params.hasOwnProperty('Batdau') && params.hasOwnProperty('Ketthuc')) {
            queryBuilder.andWhere('users.CreateAt BETWEEN :startDate AND :endDate', {
                startDate: params.Batdau,
                endDate: params.Ketthuc,
            });
        }
        if (params.hasOwnProperty('Title')) {
            queryBuilder.andWhere('users.Title LIKE :Title', {
                SDT: `%${params.Title}%`,
            });
        }
        if (params.hasOwnProperty('gid')) {
            console.log(params.gid);
            queryBuilder.andWhere('users.gid LIKE :gid', { gid: `${params.gid}` });
        }
        if (params.hasOwnProperty('fid')) {
            queryBuilder.andWhere('users.fid LIKE :fid', { fid: `${params.fid}` });
        }
        const [items, totalCount] = await queryBuilder
            .limit(params.pageSize || 10)
            .offset(params.pageNumber * params.pageSize || 0)
            .getManyAndCount();
        console.log(items, totalCount);
        return { items, totalCount };
    }
    async update(id, data) {
        await this.usersRepository.save(data);
        return await this.read(id);
    }
    async remove(id) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
    }
    async changepass(data) {
        const user = await this.read(data.id);
        if (!user) {
            return [409, 'Tài Khoản Không Đúng'];
        }
        const checkPass = await bcrypt.compare(data.oldpass, user.password);
        if (!checkPass) {
            return [409, 'Mật Khẩu Không Đúng'];
        }
        user.password = await bcrypt.hash(data.newpass, 10);
        await this.usersRepository.update(user.id, user);
        await this.usersRepository.save(user);
        return [200, 'Cập Nhật Thành Công'];
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UsersService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const express = __webpack_require__(/*! express */ "express");
const path_1 = __webpack_require__(/*! path */ "path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use('/images', express.static((0, path_1.join)(__dirname, '../sandbox/images')));
    await app.listen(3335);
    if (false) {}
}
bootstrap();

})();

/******/ })()
;