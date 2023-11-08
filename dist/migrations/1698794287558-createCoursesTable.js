"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTable1698794287558 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTable1698794287558 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'tags',
                    type: 'varchar',
                    isNullable: false,
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
        await queryRunner.dropTable('courses');
    }
}
exports.CreateCoursesTable1698794287558 = CreateCoursesTable1698794287558;
//# sourceMappingURL=1698794287558-createCoursesTable.js.map