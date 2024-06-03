import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])], //리포지토리 등록
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService] //외부 모듈에서 사용하도록 추가, 내부 모듈의 다른 클래스에서는 자유롭게 사용이 가능하나 다른 모듈에서 쓰려면 등록필요
})
export class UserModule {}
