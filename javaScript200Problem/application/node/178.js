// API 호출하기

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! Node.js HTTP Server");
});

server.listen(port, hostname, () => {
    console.log(`server running at http:/${hostname}: ${port}/`);
});

http.get("http://localhost:3000", (res) => {
    let data = "";
    res.on("data", function(chunk){
        data +=chunk;
        console.log("data of res.on =>>>>>", data);
    });

    res.on("end", function(){
        try{
            console.log("end of res.on=>>>>", data);
            return data;
        } catch (err) {
            if (err) console.log(err);
        }
    });
});

