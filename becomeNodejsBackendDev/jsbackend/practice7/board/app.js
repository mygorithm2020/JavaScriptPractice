// controller 역할
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const mongodbConnection = require("./configs/mongodb-connection");
let collection;

// 서비스 파일 로딩
const postService = require("./services/post-service");
const { ObjectId } = require("mongodb");



app.use(express.json());
app.use(express.urlencoded({extended : true}));

// app.engine("handlebars", handlebars.engine());
// 핸들바 커스텀 함수 설정 추가
app.engine("handlebars", handlebars.create({
    helpers: require("./configs/handlebars-helper"),
}).engine,
);
app.set("view engine", "handlebars");
app.set("views", __dirname+ "/views");

app.get("/", async (req, res) => {
    const page = parseInt(req.query.page) || 1; // 현재 페이지
    const search = req.query.search || "";
    try{
        const [posts, paginator] = await postService.list(collection, page, search);
        res.render("home", {title : "테스트 게시판", search, paginator, posts});
    }catch (error) {
        console.log(error);
        res.render("home", {title: "테스트 게시판"});
    }
});

app.get("/write", (req, res) => {
    res.render("write", {title: "테스트 게시판", mode: "create"});
});

app.post("/write", async (req, res) => {
    const post = req.body;
    const result = await postService.writePost(collection, post);
    res.redirect(`/detail/${result.insertedId}`);
})

app.get("/detail/:id", async (req, res) => {

    const result = await postService.getDetailPost(collection, req.params.id);
    res.render("detail", {
        title : "테스트 게시판",
        post: result.value,
    });
});

app.post("/check-password", async (req, res) => {
    console.log(req.body);
    const {id, password} = req.body;
    console.log(id, password);

    const post = await postService.getPostByIdAndPassword(collection, {id, password});

    if (!post) {
        return res.status(404).json({isExist : false});
    } else {
        return res.json({isExist : true});
    }
});

// 게시글 수정 페이지
app.get("/modify/:id", async (req, res) =>{
    const {id} = req.params.id;
    const post = await postService.getPostById(collection, req.params.id);
    console.log(post);
    res.render("write", { title: "테스트 게시판", mode: "modify", post});
});

// 게시글 수정 기능
app.post("/modify/", async (req, res) => {
    const {id, title, writer, password, content} = req.body;

    const post = {
        title,
        writer,
        password,
        content,
        createdDt : new Date().toISOString(),
    };

    const result = await postService.updatePost(collection, id, post);
    if (result && result.modifiedCount === 1){
        res.redirect(`/detail/${id}`);
        console.log(result);
    } else {
        // 비밀번호가 틀렸을 경우 어떻게 처리를 할 것인가.......흠.......
        // form에서 예외처리 혹은 전송 후 처리를 하면 좋을텐데 방법이 안나오네
    }
    
})

app.delete("/delete", async (req, res) => {
    const {id, password} = req.body;
    try{
        const result = await collection.deleteOne({ _id: ObjectId(id), password});

        if (result.deletedCount !== 1){
            console.log("삭제 실패");
            return res.json({isSuccess: false});
        }
        return res.json({isSuccess: true});
    } catch (error) {
        console.log(error);
        return res.json({isSuccess : false});
    }
});

app.post("/write-comment", async (req, res) => {
    const {id, name, password, comment} = req.body;
    const post = await postService.getPostById(collection, id);

    if (post.comments){
        post.comments.push({
            idx: post.comments.length + 1,
            name,
            password,
            comment,
            createdDt: new Date().toISOString(),
        });
    } else {
        post.comments = [
            {
                idx: 1,
                name,
                password,
                comment,
                createdDt: new Date().toISOString(),
            },
        ];
    }

    postService.updatePost(collection, id, post);
    // 댓글 추가 후 새로고침
    return res.redirect(`/detail/${id}`);
})

app.delete("/delete-comment", async (req, res) => {
    const {id, idx, password} = req.body;


    // elemMatch : 연산자로써 도큐먼트 안에 있는 리스트에서 조건에 해당하는 데이터가 있으면 도큐먼트를 결과값으로
    const post = await collection.findOne(
        {
            _id: ObjectId(id),
            comments : { $elemMatch: {idx : parseInt(idx), password}},
        },
        postService.projectionOption,
    );

    // 데이터가 없으면 종료
    if (!post) {
        return res.json({isSuccess : false});
    }

    post.comments = post.comments.filter((comment) => comment.idx != idx);
    postService.updatePost(collection, id, post);
    return res.json({isSuccess : true});
    
})





//에러 페이지 로드 404
app.use((req,res)=>{
	res.status(404);
    // console.log(req.headers);
    // if (req.headers["content-type"] === "application/json"){
    //     res.json({message : "NotFound"});
    // }else{
    //     res.render("notFound");
    // }
    res.render("notFound");
    
});



app.listen(3000, async () => {
    console.log("Server started");
    const mongoClient = await mongodbConnection();
    collection = mongoClient.db().collection("post");
    console.log("MongoDB connected");
});

function encryptPassword(password){
    let result = "";
    password += "123";
    return result;

}