import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  console.log(configService.get("SERVER_PORT"));
  await app.listen(configService.get("SERVER_PORT"), ()=> {
    console.log("서버 시작");
  });
}
bootstrap();
