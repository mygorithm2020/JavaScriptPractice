import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getHello(): string {
    const message = this.configService.get('MESSAGE');
    return message;
  }

  @Get('service-url')
  getServiceUrl(): string {
    console.log(this.configService.get('SERVICE_URL'));
    return this.configService.get('SERVICE_URL');
  }

  @Get('server-url')
  getServerUrl(): string {
    console.log(this.configService.get('SERVER_URL'));
    return this.configService.get('SERVER_URL');
  }

  @Get('db-info')
  getTest() : string {
    console.log(this.configService.get('logLevel'));
    console.log(this.configService.get("apiVersion"));
    return this.configService.get('dbInfo');
  }

  @Get('redis-info')
  getRedisInfo() : string {
    const res = `${this.configService.get('redis.host')}:${this.configService.get('redis.port')}`;
    return res;
  }
}
