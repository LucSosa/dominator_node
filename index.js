const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    const { name, age } = req.query;

    return res.json({
        title: "Hello World!",
        message: `Hello ${name}, how are you today?`,
        age: age
    });
});

server.get("/hello/:name", (req, res) => {
    const { name } = req.params;

    return res.json({
        title: "Hello World!",
        message: `Hello ${name}, how are you today?`,
    });
});

server.listen(3003);