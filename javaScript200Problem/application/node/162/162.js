const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("test.html", (err, data) => {
        if (err){
            return console.log(err);
        }
        res.end(data, "utf-8");
    })
    // res.end("test");
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});