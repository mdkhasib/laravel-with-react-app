import { useEffect, useState } from "react";
import api from "../api/axios";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTodos = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    await api.post("/todos", { title, description });
    setTitle("");
    setDescription("");
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    loadTodos();
  };

  const completeTodo = async (id, completed) => {

    await api.put(`/todos/${id}`, { completed: !completed });
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="container">
      <h2>My Todos Add</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={description} onChange={e => setDescription(e.target.value)} />
      
      <button onClick={addTodo}>Add</button>

      <TodoItem todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
