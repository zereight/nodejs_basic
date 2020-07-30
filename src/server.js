const http = require("http");

function createServer_callback(req, res) {
  /* Http header를 전송한다. */
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello body");
}

http.createServer(createServer_callback).listen(8081);

console.log("Server started");
