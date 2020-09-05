const express = require("express");
const router = express.Router();
const todoController = require("./todo.controller");

router.get("/", todoController.get);
router.post("/", todoController.post);

module.exports = router;
