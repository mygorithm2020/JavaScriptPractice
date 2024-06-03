import { readFile, writeFile } from "fs/promises";
import { PostDto } from "./blog.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Blog, BlogDocument } from "./blog.schema";
import { Model } from "mongoose";

//  인터페이스를 이용하여 확장성이 좋은 코드로 변경

export interface BlogRepository {
    getAllPost() : Promise<PostDto[]>;
    createPost(postDto: PostDto);
    getPost(id: string): Promise<PostDto>;
    deletePost(id: string);
    updatePost(id: string, postDto: PostDto);
}

@Injectable()
export class BlogMongoRepository implements BlogRepository {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>){}

    async getAllPost(): Promise<Blog[]> {
        return await this.blogModel.find().exec();
    }
    
    async createPost(postDto: PostDto) {
        const createPost = {
            ...postDto,
            createdDt: new Date(),
            updatedDt : new Date(),
        };
        this.blogModel.create(createPost);
    }
    
    async getPost(id: string): Promise<PostDto> {
        return await this.blogModel.findById(id);
    }
    
    async deletePost(id: string) {
        await this.blogModel.findByIdAndDelete(id);
    }
    
    async updatePost(id: string, postDto: PostDto) {
        const updatePost = {id, ...postDto, updatedDt: new Date()};
        await this.blogModel.findByIdAndUpdate(id, updatePost);
    }
}

@Injectable()
export class BlogFileRepository implements BlogRepository {
    
    FILE_NAME = "./src/blog.data.json";

    async getAllPost(): Promise<PostDto[]> {
        const datas = await readFile(this.FILE_NAME, 'utf8');
        const posts = JSON.parse(datas);
        return posts;
    }

    async createPost(postDto: PostDto) {
        const posts = await this.getAllPost();
        let id = 0;
        // 단순히 전체 길이 + 1 을하면 기존 게시물이 삭제되면 숫자가 중복 됨
        if (posts && posts.length > 0){
            id = parseInt(posts[posts.length -1]["id"])  + 1;
        }
        const createPost = {id: id.toString(), ...postDto, createdDt: new Date()};
        posts.push(createPost);
        await writeFile(this.FILE_NAME, JSON.stringify(posts));
    }
    async getPost(id: string): Promise<PostDto> {
        const posts = await this.getAllPost();
        const result = posts.find((post) => post.id === id);
        return result;
    }
    async deletePost(id: string) {
        const posts = await this.getAllPost();
        const filteredPosts = posts.filter((post) => post.id !== id);
        await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts));
    }
    async updatePost(id: string, postDto: PostDto) {
        const posts = await this.getAllPost();
        const index = posts.findIndex((post) => post.id === id);
        const updatePost = {id, ...postDto, updatedDt : new Date()};
        posts[index] = updatePost;
        await writeFile(this.FILE_NAME, JSON.stringify(posts));
    }
}