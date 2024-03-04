const http = require("http");
const routes = require('./routes');

const server = http.createServer(routes);

server.on("connection", function () {
  console.log("new connection...");
});

server.listen(3000);
console.log("Listening por on http://localhost:3000");
