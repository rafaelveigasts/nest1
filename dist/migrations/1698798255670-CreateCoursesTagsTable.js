"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTagsTable1698798255670 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTagsTable1698798255670 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses_tags_tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('courses_tags');
    }
}
exports.CreateCoursesTagsTable1698798255670 = CreateCoursesTagsTable1698798255670;
//# sourceMappingURL=1698798255670-CreateCoursesTagsTable.js.map