const getTodo = "SELECT * FROM todo";
const createTodo = "INSERT INTO todo (description) VALUES($1) RETURNING *";
const getTodoById = "SELECT * FROM todo WHERE todo_id = $1";
const deleteTodo =
  "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *";
module.exports = { getTodo, createTodo, getTodoById, deleteTodo };
