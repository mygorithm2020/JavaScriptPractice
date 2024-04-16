// 파읽 읽기 비동기 동기 구분

"use strict";

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "r", (err, fd) => {
    if (err && err.code === "ENOENT"){
        return console.log("읽을 수 없는 파일입니다.");
    }
    
    if (err) return console.log(err);

    console.log("파일을 정상적으로 읽을 수 있습니다");
    let idx = 1;

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return console.log(err);

        console.log("readFile", idx++, data);
    });

    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log("readFileSync", idx++, data);
    } catch (error) {
        console.log(error);
    }
});