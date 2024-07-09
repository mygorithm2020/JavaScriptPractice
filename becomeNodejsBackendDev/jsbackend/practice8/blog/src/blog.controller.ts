import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BlogService } from "./blog.service";

@Controller('blog')  // => {서버주소}/blog 이하
export class BlogController {
    

    constructor(private blogService : BlogService) {
    }

    @Get()
    async getAllPosts(){
        return await this.blogService.getAllPosts();

    }

    @Post()
    createPost(@Body() postDto){ //HTTP 요청의 body내용을 post에 할당
        this.blogService.createPost(postDto);
        return "success";
        
    }

    @Get('/:id')
    async getPost(@Param('id') id: string){
        const post = await this.blogService.getPost(id);        
        return post;
    }

    @Delete('/:id')
    deletePost(@Param('id') id: string){
        this.blogService.delete(id);
        return "success";        
    }

    @Put("/:id")
    updatePost(@Param('id') id: string, @Body() postDto){
        this.blogService.updatePost(id, postDto);  
        return "success";         
    }
    
}