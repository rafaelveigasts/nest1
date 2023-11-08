import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CoursesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* 
Este código é a definição do módulo principal de uma aplicação NestJS. NestJS é um framework para construir aplicações server-side eficientes e escaláveis em Node.js, usando TypeScript.

O código começa importando as dependências necessárias. Module é um decorador que fornece metadados que NestJS usa para organizar a estrutura da aplicação. AppController e AppService são, respectivamente, o controlador e o serviço principal da aplicação. CoursesModule e DatabaseModule são módulos adicionais que provavelmente contêm funcionalidades relacionadas a cursos e ao banco de dados, respectivamente. ConfigModule é um módulo do NestJS que lida com a configuração da aplicação.

O decorador @Module é usado para definir o módulo AppModule. Dentro do decorador @Module, temos várias propriedades:

imports: Esta propriedade é usada para importar outros módulos. Aqui, estamos importando ConfigModule, CoursesModule e DatabaseModule. ConfigModule.forRoot é uma maneira de configurar o módulo globalmente para a aplicação. Estamos passando um objeto de configuração que especifica que o módulo é global e que o arquivo de configuração está localizado em .env.

controllers: Esta propriedade é usada para declarar os controladores que serão usados neste módulo. Aqui, estamos declarando AppController.

providers: Esta propriedade é usada para declarar os serviços que serão usados neste módulo. Aqui, estamos declarando AppService.

Finalmente, a classe AppModule é exportada para que possa ser usada em outros lugares da aplicação.
*/
