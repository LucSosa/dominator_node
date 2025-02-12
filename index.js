const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    return res.json({
        title: "Hello World!",
        message: "Send a message hello"
    });
});
server.listen(3003);