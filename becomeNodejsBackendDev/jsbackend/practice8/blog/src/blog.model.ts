export interface PostDto{
    id: string;    //null 이 아님
    title : string;
    content : string;
    name : string;
    createdDt : Date;
    updatedDt? : Date;   //null 가능
}