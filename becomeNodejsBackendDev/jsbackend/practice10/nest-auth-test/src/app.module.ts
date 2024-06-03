import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nest-auth-test.sqlite', //데이터베이스 파일명
      entities: [User],  //엔터티 리스트
      synchronize: true,  //디비에 스키마 동기화 (개발용으로만 쓰기): 서버 기동시 서버가 엔터티 객체를 읽어서 디비에 생성 및 수정
      logging : true,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
