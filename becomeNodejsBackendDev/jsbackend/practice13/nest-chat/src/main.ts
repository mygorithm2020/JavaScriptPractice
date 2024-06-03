import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // NestExpressApplication 으로 반환타입 지정
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "static"));     // 정적 파일 서비스 간단하면 express로 정밀하면 server-static
  await app.listen(3000);
}
bootstrap();
