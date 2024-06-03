import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import config from './configs/config';

console.log(`env : ${process.env.NODE_ENV}`);
console.log(`currnet working directory : ${process.cwd()}`);// 현재 디렉터리
console.log(`${process.cwd()}/envs/${process.env.NODE_ENV}.env`);

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV.trim()}.env`,  //환경변수 파일 경로 지정
    load: [config],     //ts 환경변수 추가
    cache: true,   // 메모리 캐시 기능 활용
    expandVariables: true,      //env파일에서 확장 변수(환경변수를 다른 환경변수에 합께 사용) 옵션 추가

  }), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
