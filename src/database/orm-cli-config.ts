import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateTagsTable1698795648166 } from 'src/migrations/1698795648166-createTagsTable';
import { CreateCoursesTable1698794287558 } from 'src/migrations/1698794287558-createCoursesTable';
import { CreateCoursesTagsTable1698798255670 } from 'src/migrations/1698798255670-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTags1698798780026 } from 'src/migrations/1698798780026-AddCoursesIdToCoursesTags';
import { AddTagsIdToCoursesTagsTable1698799522928 } from 'src/migrations/1698799522928-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/course.entity';
import { Tags } from 'src/courses/entities/tags.entity';

export const dataSourCeOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.Db_PASSWORD,
  // database: 'devtraining_db',
  entities: [Course, Tags],
  // migrations: ['src/database/migrations/*.ts'],
  //synchronize: true, // pega os dados da entidade e cria a tabela mas para isso precisa decorar a entidade com @Entity(), se tiver true e não tiver o @Entity() ele vai dar erro
};

export const dataSource = new DataSource({
  ...dataSourCeOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1698794287558,
    CreateTagsTable1698795648166,
    CreateCoursesTagsTable1698798255670,
    AddCoursesIdToCoursesTags1698798780026,
    AddTagsIdToCoursesTagsTable1698799522928,
  ],
});
