import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todoService from "./services/todoService";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todoService.getAll();
    setTodos(todos);
  };

  const deleteTodo = async (id: string) => {
    await todoService.delete(id);
    loadTodos();
  };

  const addTodo = async (title: string) => {
    const newTodo = await todoService.create(title);
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}

export default App;
