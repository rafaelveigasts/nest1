import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTagsIdToCoursesTagsTable1698799522928
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags_tags',
      new TableColumn({
        name: 'tags_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'courses_tags_tags',
      new TableForeignKey({
        name: 'courses_tags_tags',
        columnNames: ['tags_id'],
        referencedTableName: 'tags',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL', // se o curso for deletado, o campo fica null
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses_tags_tags', 'courses_tags_tags');

    await queryRunner.dropColumn('courses_tags_tags', 'tags_id');
  }
}
