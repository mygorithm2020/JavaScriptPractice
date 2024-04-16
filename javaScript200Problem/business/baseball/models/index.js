// 198 서버 만들기 파일로 데이터 기록 / 조회

'use strict';

const fs = require('fs');
const path = require('path');

const FILEPATH = path.join(__dirname, 'data.json');

exports.readFile = () => {
    try {
        fs.openSync(FILEPATH, 'r');
        const data = fs.readFileSync(FILEPATH, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
};

const writeFile = exports.writeFile = (data) => {
    if (typeof data !== 'string') data = JSON.stringify(data);
    console.log(data);

    try {
        // fs.openSync(FILEPATH, 'wx'); //이걸 하면 파일을 읽을 권한이 없다고 나옴.. 하지만 밑에 코드로 써보면 가능함..
        fs.writeFileSync(FILEPATH, data, 'utf8');
    } catch (err) {
        console.log(err);
        // try {
        //     if (err.code === "EEXIST"){
        //         fs.unlinkSync(FILEPATH); //파일 삭제
        //         return writeFile(data);
        //     }
        // } catch (err) {
        //     throw err;
        // }
        throw err;
    }
};

// writeFile(JSON.stringify("test"));


