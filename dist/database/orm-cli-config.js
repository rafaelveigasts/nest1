"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourCeOptions = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1698795648166_createTagsTable_1 = require("../migrations/1698795648166-createTagsTable");
const _1698794287558_createCoursesTable_1 = require("../migrations/1698794287558-createCoursesTable");
const _1698798255670_CreateCoursesTagsTable_1 = require("../migrations/1698798255670-CreateCoursesTagsTable");
const _1698798780026_AddCoursesIdToCoursesTags_1 = require("../migrations/1698798780026-AddCoursesIdToCoursesTags");
const _1698799522928_AddTagsIdToCoursesTagsTable_1 = require("../migrations/1698799522928-AddTagsIdToCoursesTagsTable");
const course_entity_1 = require("../courses/entities/course.entity");
const tags_entity_1 = require("../courses/entities/tags.entity");
exports.dataSourCeOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.Db_PASSWORD,
    entities: [course_entity_1.Course, tags_entity_1.Tags],
};
exports.dataSource = new typeorm_1.DataSource({
    ...exports.dataSourCeOptions,
    synchronize: false,
    migrations: [
        _1698794287558_createCoursesTable_1.CreateCoursesTable1698794287558,
        _1698795648166_createTagsTable_1.CreateTagsTable1698795648166,
        _1698798255670_CreateCoursesTagsTable_1.CreateCoursesTagsTable1698798255670,
        _1698798780026_AddCoursesIdToCoursesTags_1.AddCoursesIdToCoursesTags1698798780026,
        _1698799522928_AddTagsIdToCoursesTagsTable_1.AddTagsIdToCoursesTagsTable1698799522928,
    ],
});
//# sourceMappingURL=orm-cli-config.js.map