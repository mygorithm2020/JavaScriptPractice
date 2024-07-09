//  실제 db에 작업하는 내용들

const paginator = require("../utils/paginator");
const { ObjectId } = require("mongodb");



// 글쓰기
async function writePost(collection, post){
    post.hits = 0;
    post.createdDt = new Date().toISOString();
    return await collection.insertOne(post);
}

// 글 목록
async function list(collection, page, search) {
    const perPage = 10;

    //  title이 search와 부분일치하는지 확인
    const query = {title : new RegExp(search, "i")};
    // skip 은 설정된 개수만큼 건너뛴다, 생성일 역순으로 정렬
    const cursor = collection.find(query, {limit : perPage, skip : (page - 1) * perPage}).sort({
        createdDt: -1,
    });
    // 쿼리에 걸리는 게시물의 총 수
    const totalCount = await collection.count(query); 
    const posts = await cursor.toArray();
    console.log(posts);

    const paginatorObj = paginator({totalCount, page, perPage: perPage});
    return [posts, paginatorObj];
}

// 패스워드는 제외
const projectionOption = {
    projection: {
        // 프로젝션(투영) 결과값에서 일부만 가져올 떄 사용
        password: 0,
        "comments.password": 0,
    },
};

async function getDetailPost(collection, id){
    // 게시글을 읽을 떄마다 hits 를 1 씩 증가
    return await collection.findOneAndUpdate(
        { _id: ObjectId(id)},
        { $inc: {hits:1}},
        projectionOption
    );
}

async function getPostByIdAndPassword(collection, {id, password}) {
    return await collection.findOne({ _id: ObjectId(id), password: password}, projectionOption);
}

async function getPostById(collection, id) {
    return await collection.findOne({ _id: ObjectId(id)}, projectionOption);
}

async function updatePost(collection, id, post) {
    const toUpdatePost = {
        $set: {
            ...post,
        },
    };
    return await collection.updateOne({_id: ObjectId(id), password : post.password}, toUpdatePost);
}

async function deletePost(collection, id, password){
    const result = await collection.deleteOne({ _id: ObjectId(id), password});
    return result;
}

module.exports = {
    getPostByIdAndPassword,
    getPostById,
    updatePost,
    getDetailPost,
    list,
    writePost,
};