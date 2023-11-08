"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsIdToCoursesTagsTable1698799522928 = void 0;
const typeorm_1 = require("typeorm");
class AddTagsIdToCoursesTagsTable1698799522928 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags_tags', new typeorm_1.TableColumn({
            name: 'tags_id',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_tags',
            columnNames: ['tags_id'],
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_tags');
        await queryRunner.dropColumn('courses_tags_tags', 'tags_id');
    }
}
exports.AddTagsIdToCoursesTagsTable1698799522928 = AddTagsIdToCoursesTagsTable1698799522928;
//# sourceMappingURL=1698799522928-AddTagsIdToCoursesTagsTable.js.map