import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

// 서버를 최초로 실행되는 함수 bootstrap으로 짓는게 관례
async function bootstrap() {

    const app = await NestFactory.create(HelloModule);

    await app.listen(3000, () => {console.log("서버 시작!");});
    
}

bootstrap();