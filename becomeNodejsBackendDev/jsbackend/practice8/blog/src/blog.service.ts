import { filter } from "rxjs";
import { PostDto } from "./blog.model";
import { BlogFileRepository, BlogMongoRepository, BlogRepository } from "./blog.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BlogService{

    // 아래와 같은 코드 위는 더 간략하게 구현
    // private blogRepository: BlogFileRepository;
    // constructor(blogRepository: BlogFileRepository) {
    //     this.blogRepository = blogRepository;
    // }

    constructor(private blogRepository: BlogMongoRepository) {
        
    }

    

    async getAllPosts(){
        return await this.blogRepository.getAllPost();
    }

    createPost(postDto: PostDto){
        // const id = this.posts.length + 1; // 이렇게 책에 나와있는데, 이러면 삭제하고 또 만들면 id가 겹칠텐데..????
        
        this.blogRepository.createPost(postDto);
    }

    async getPost(id): Promise<PostDto>{
        return await this.blogRepository.getPost(id);
    }

    delete(id){
        this.blogRepository.deletePost(id);
        
    }

    updatePost(id, postDto: PostDto) {
        this.blogRepository.updatePost(id, postDto);
    }

}