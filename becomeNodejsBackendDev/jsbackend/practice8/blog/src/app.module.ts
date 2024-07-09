import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './blog.schema';

@Module({
  imports: [
    // 몽고디비 연결설정
    MongooseModule.forRoot(
      'mongodb+srv://mygoTest:test1234@cluster0.e3nsvf7.mongodb.net/blog?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([{name:Blog.name, schema: BlogSchema}]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],  
  //providers 넣어야만 의존성 주입으로 활용 가능 , 예를 들어 BlogService는 Injectable 데코가 있고 BlogController의 생성자로 객체를 받고 있음
})
export class AppModule {}
