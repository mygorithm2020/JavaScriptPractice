// 특정 폴더 내 모든 파일 삭제

"use strict";

const fs = require("fs");
const path = require("path");

const removePath = (p, callback) => {
    fs.stat(p, (err, stats) => {
        if (err) return callback(err);

        if (!stats.isDirectory()) {
            console.log("이 경로는 파일입니다.");
            return fs.unlink(p, err => err? callback(err) : callback(null, p));
        }

        console.log("이 경로는 폴더입니다.");
        // 만약 폴더내에 뭔가 남아있다면 삭제가 불가능 함..
        fs.rmdir(p, (err) => {
            if (err) return callback(err);

            return callback(null, p);
        });
    });
};

const printResult = (err, result) => {
    if (err) return console.log(err);

    console.log(`${result}를 정상적으로 삭제했습니다`);
}

const p = path.join(__dirname, "js200");

try{
    const files = fs.readdirSync(p);
    if (files.length){
        files.forEach(f => removePath(path.join(p, f), printResult));
    }

} catch (err){
    if (err) return console.log(err);
}

removePath(p, printResult);