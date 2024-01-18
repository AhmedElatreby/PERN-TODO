const express = require("express");
const route = express.Router();
const pool = require("../db/db");
const query = require("../db/query");

//create a todo
route.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(query.createTodo, [description]);
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all todo
route.get("/", async (req, res) => {
  try {
    const allTodos = await pool.query(query.getTodo);
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// gat a todo
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getTodoById = await pool.query(query.getTodoById, [id]);
    res.json(getTodoById.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update todo
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(query.deleteTodo, [description, id]);
    res.json("Todo was updated!");
  } catch (error) {
    console.log(error.message);
  }
});

//delete todo
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo where todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = route;
