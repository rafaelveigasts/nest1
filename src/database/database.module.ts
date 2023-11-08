import { Inject, Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { Tags } from 'src/courses/entities/tags.entity';
import { ConfigService } from '@nestjs/config';
//definições para banco de dados

export const dataSourCeOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5436,
  username: 'postgres',
  password: 'postgres',
  // database: 'devtraining_db',
  entities: [Course, Tags],
  // migrations: ['src/database/migrations/*.ts'],
  //synchronize: true, // pega os dados da entidade e cria a tabela mas para isso precisa decorar a entidade com @Entity(), se tiver true e não tiver o @Entity() ele vai dar erro
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [Course, Tags],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}

/* 
subir container docker:
docker run --name devtraining_db  -e POSTGRES_PASSWORD=postgres -d -p 5436:5432 postgres


Migrations: 

Criar migration:
npx typeorm migration:create -n CreateCourseTable
-n: é o nome da migration
deve passar o path para o módulo do banco

Executar migration:
npx typeorm migration:run 

Reverter migration:
npx typeorm migration:revert
*/
