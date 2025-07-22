const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/secretCode") {
    res.end("No secret code for you!");
    return; 
  }
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
