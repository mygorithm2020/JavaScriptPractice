// 웹 API 작성 1
"use strict";

const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {    
    console.log(req.hostname, req.url);
    switch (req.method) {        
        case "GET":
            if (req.url === "/"){
                res.setHeader("Content-type", "text/plain");
                res.writeHead(200);
                res.end("Hello! Node.js HTTP Server");
            } else if (req.url.substring(0, 5) === "/data") {
                console.log(url.parse(req.url, true));
                const queryParams = url.parse(req.url, true).query;

                res.setHeader("Content-Type", "text/html");
                res.writeHead(201);
                res.write("<html><head><title>JavaScript 200제</title></head><body>")

                for (let key in queryParams) {
                    res.write(`<h1>${key}</h1>`);
                    res.write(`<h2>${queryParams[key]}</h2>`);
                }
                res.end("</body></html>");
            }
            break;
        default:
            res.end("Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log("Server running", hostname, port);
})