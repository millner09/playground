const express = require("express");
const app = express();
const port = 3000;
const root = require("./app/root");
const user = require("./app/user");
const todo = require("./app/todo");
var verbose = process.env.NODE_ENV != "test";

app.map = function (a, route) {
  route = route || "";
  for (var key in a) {
    switch (typeof a[key]) {
      // { '/path': { ... }}
      case "object":
        app.map(a[key], route + key);
        break;
      // get: function(){ ... }
      case "function":
        if (verbose) console.log("%s %s", key, route);
        app[key](route, a[key]);
        break;
    }
  }
};

const myHelloWorldMiddleware = (req, res, next) => {
  console.log("Hello World from middleware!");
  next();
};

app.use(myHelloWorldMiddleware);
app.use(express.json());
app.map({
  "/": {
    get: root.get,
    post: root.post,
  },
  "/user": {
    put: user.put,
    delete: user.delete,
  },
  "/todo": {
    get: todo.get,
    post: todo.post,
  },
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
