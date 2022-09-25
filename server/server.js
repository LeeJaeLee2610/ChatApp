import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import path from "path";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new Server(server);
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("chat message", msg => {
    console.log("message: " + msg);
  });
});

server.listen(3030, () => {
  console.log("Port 3030");
});
