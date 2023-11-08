"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsTable1698795648166 = void 0;
const typeorm_1 = require("typeorm");
class CreateTagsTable1698795648166 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'tags',
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
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('tags');
    }
}
exports.CreateTagsTable1698795648166 = CreateTagsTable1698795648166;
//# sourceMappingURL=1698795648166-createTagsTable.js.map