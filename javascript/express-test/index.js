const express = require("express");
const app = express();
const port = 3000;

const myHelloWorldMiddleware = (req, res, next) => {
  console.log("Hello World from middleware!");
  next();
};

app.use(myHelloWorldMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
