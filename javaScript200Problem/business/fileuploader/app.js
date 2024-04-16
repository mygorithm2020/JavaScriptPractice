// 따로 npm으로 추가한 외부 패키지
const express = require("express"); // API 용 웹 프레임워크
const multer = require("multer"); // 파일 업로드용 모듈
const cors = require("cors"); // cors 문제 우회용


const fs = require("fs");
const path = require("path");

const UPLOAD_PATH = "uploads/";
const storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, UPLOAD_PATH),
    filename : (req, file, cb) => cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname))

});

const upload = multer({storage});
const app = express();

app.use((err, req, res, next) => {
    res.status(500).send("파일 업로드에 실패했습니다.");
});


app.get("/", (req, res, next) => {
    console.log(req.ip);
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/upload", cors(), upload.single('file'), (req, res, next) => {
    if (!req.file) return next(400);
    res.status(200).send("파일을 정상적으로 업로드했습니다.");
});

app.get("/file_list", cors(), (req, res, next) => {
    fs.readdir(path.join(__dirname, UPLOAD_PATH), (err, files) => {
        if (err) return next(err);
        res.status(200).send(files);
    })
});

app.listen(3000);