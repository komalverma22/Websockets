"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("let's start");
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(()=>{
    //     socket.send("current price of solana is "+Math.random())
    // },500)
    socket.on("message", (e) => {
        // console.log(e.toString());
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
