const { Router} =require("express");
const { getTodo, saveTodo, deleteTodo, editTodo } = require("./TodoController");

const router= Router();


router.get("/", getTodo);
router.post("/saveTodo", saveTodo);
router.post("/deleteTodo", deleteTodo);
router.post("/editTodo", editTodo);


module.exports = router
