// http 서버 띄우기

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 203;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello! Node.js HTTP Server");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});