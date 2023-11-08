"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCoursesIdToCoursesTags1698798780026 = void 0;
const typeorm_1 = require("typeorm");
class AddCoursesIdToCoursesTags1698798780026 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags_tags', new typeorm_1.TableColumn({
            name: 'course_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_course',
            columnNames: ['course_id'],
            referencedTableName: 'courses',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_course');
        await queryRunner.dropColumn('courses_tags_tags', 'course_id');
    }
}
exports.AddCoursesIdToCoursesTags1698798780026 = AddCoursesIdToCoursesTags1698798780026;
//# sourceMappingURL=1698798780026-AddCoursesIdToCoursesTags.js.map