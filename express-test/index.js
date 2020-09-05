const express = require("express");
const app = express();
const port = 3000;
const root = require("./app/root");
const user = require("./app/user");
const todoRouter = require("./app/todo/todo.router");
var verbose = process.env.NODE_ENV != "test";

app.use(express.json());

app.use("/api/todo", todoRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
