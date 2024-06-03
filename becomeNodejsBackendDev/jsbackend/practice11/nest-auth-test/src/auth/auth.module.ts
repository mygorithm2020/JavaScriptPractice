import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [UserModule, PassportModule.register({session: true})],
  providers: [AuthService, LocalStrategy, SessionSerializer, GoogleStrategy],   //Injectable 데코 필요
  controllers: [AuthController]
})
export class AuthModule {}
