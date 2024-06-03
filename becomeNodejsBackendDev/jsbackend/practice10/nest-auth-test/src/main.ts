import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //유효성 검증 추가
  app.use(cookieParser());    //쿠키 파서 설정
  app.use(
    session(
      {
        secret: 'very-important-secret',  //세션 암호화 키
        resave: false,  //세션을 항상 저장할지 여부
        saveUninitialized: false, // 세션이 저장되기전에 빈값으로 저장할지 여부
        cookie: {maxAge: 3600000} //쿠키 유효시간 1시간
      }
    ),
  );
  // 초기화 및 세션 저장소 초기화
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
