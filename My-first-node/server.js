const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello World!");
  })
  .listen(3000, () => console.log("Server listening on port 3000..."));
