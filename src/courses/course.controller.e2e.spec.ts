import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { INestApplication } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Tags } from './entities/tags.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';
import { after } from 'node:test';

describe('CoursesController e2e ', () => {
  let controller: INestApplication;
  let module: TestingModule;
  let _data: any;
  let courses: Course[];

  const dataSourCetest: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5437,
    username: process.env.DB_USER,
    password: process.env.Db_PASSWORD,
    entities: [Course, Tags],
    synchronize: true,
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        CoursesController,
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            ...dataSourCetest,
          }),
        }),
      ],
    }).compile();

    controller = module.createNestApplication();
    await controller.init();

    _data = {
      name: 'NestJS',
      description: 'Curso de NestJS',
      tags: ['NodeJS', 'TypeScript', 'NestJS'],
    };
  });

  beforeEach(async () => {
    const dataSource = await new DataSource(dataSourCetest).initialize();

    const repository = await dataSource.getRepository(Course);
    courses = await repository.find();

    await dataSource.destroy();
  });

  afterAll(async () => {
    await module.close();
  });

  describe('Create', () => {
    it('should create a course', async () => {
      const response = await request(controller.getHttpServer())
        .post('/courses')
        .send(_data);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
    });
  });
});
