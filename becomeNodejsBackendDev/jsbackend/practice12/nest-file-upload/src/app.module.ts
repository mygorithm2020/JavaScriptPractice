import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  // 정적 파일 서비스에 사용하는 패키지
  imports: [
    ServeStaticModule.forRoot({   //초기화 함수 실행
      rootPath: join(__dirname, "..", "uploads"),   //실제 파일 경로
      serveRoot: '/uploads',   // url 뒤에 붙을 경로
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
