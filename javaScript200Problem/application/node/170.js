//fs 모듈과 path 모듈 활용

"use strict";

const fs = require("fs");
const path = require("path");
const { callbackify } = require("util");

const makeFile = (path, callback) => {
    console.log("make");
    fs.writeFile(path, "new file, new content", "utf-8", (err) => {
        console.log("여긴가?");
        if (err){
            
            return callback(err);

        } 

        console.log("파일이 생성됐습니다.");
        callback(null);
    });
};

const appendFile = (path, callback) => {
    console.log("저긴가?");
    fs.appendFile(path, "\nUpdate file", (err) => {
        if (err) return callback(err);

        console.log("내용을 추가");
        callback(null);
    });
};

const printErrIfExist = (err) => {
    if (err) console.log(err);
}

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "wx", (err, fd) => {
    if (err && err.code === "EEXIST"){
        return appendFile(filePath, (err) => {
            printErrIfExist(err);
        })
    }
    // if (err) {
    //     return printErrIfExist(err);
    // }

    return makeFile(filePath, (err)=> {
        printErrIfExist(err);
    })
});

