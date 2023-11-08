import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //retorna um erro se tiver um campo que não existe no DTO
      forbidNonWhitelisted: true, //retorna um erro se tiver um campo que não existe no DTO
      transform: true, //transforma os dados em objetos
    }),
  );
  await app.listen(3000);
  console.log(`Application is running on http://localhost:3000`);
}
bootstrap();
