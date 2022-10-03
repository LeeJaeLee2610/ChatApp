import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./model/User.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __dirname = path.resolve();

const server = http.createServer(app);
const io = new Server(server);
dotenv.config({ path: path.join(__dirname, "src/config/.env") });

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_CONNECT}`);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/get", async (req, res) => {
  try {
    const user = await User.find({});
    console.log(user);
    res.send(user);
  } catch (error) {}
});

app.post("/post", async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save();
    res.send(req.body);
  } catch (error) {}
});

// Tạo kết nối giữa client-server
io.on("connection", (socket) => {
  // server lấy dữ liệu từ client gửi về
  socket.on("message", (data) => {
    // Sau khi lấy dữ liệu từ client, phát lại dữ liệu đến các client khác
    socket.emit("message", data);
    console.log(data);
  });
});

// io.emit("some event", {
//   someProperty: "some value",
//   otherProperty: "other value",
// }); // This will emit the event to all connected sockets

server.listen(3030, () => {
  console.log("Port 3030");
});
