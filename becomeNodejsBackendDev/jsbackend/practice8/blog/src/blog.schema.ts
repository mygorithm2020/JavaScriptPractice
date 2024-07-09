import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type BlogDocument = Blog & Document; //블로그 이면서 도큐먼트인 타입 정의

@Schema()  //스키마임을 나타냄
export class Blog {
    @Prop() // 스키마의 프로퍼티ㄹ임을 나타냄
    id: string;

    @Prop()
    title : string;

    @Prop()
    content : string;

    @Prop()
    name : string;

    @Prop()
    createdDt : Date;

    @Prop()
    updatedDt : Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);