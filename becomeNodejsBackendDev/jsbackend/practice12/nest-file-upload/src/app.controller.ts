import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOption } from './multer.options';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //content-type : multipart/form-data
  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file', multerOption))  //요청과 응답 간에 로직을 추가하는 미들웨어
  // @UploadedFile() : 인수로 넘겨진 값 중 file 객체를 지정해 꺼내는 역할
  fileUpload(@UploadedFile() file: Express.Multer.File) {
    //console.log(file.buffer.toString("utf-8")); //텍스트 파일 내용 출력
    console.log(file);
    return `${file.originalname} File Uploaded check http://localhost:3000/uploads/${file.filename}`;
  }
}
