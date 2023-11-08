import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCoursesIdToCoursesTags1698798780026
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags_tags',
      new TableColumn({
        name: 'course_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'courses_tags_tags',
      new TableForeignKey({
        name: 'courses_tags_course',
        columnNames: ['course_id'],
        referencedTableName: 'courses',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL', // se o curso for deletado, o campo fica null
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'courses_tags_tags',
      'courses_tags_course',
    );

    await queryRunner.dropColumn('courses_tags_tags', 'course_id');
  }
}
