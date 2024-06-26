const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.send("/public/index.html");
});

// socket io

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("user-message", (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
