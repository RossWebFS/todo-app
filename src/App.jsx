import { TodoList } from "./components/TodoList";
import { Context } from "./Context";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || "[]");
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={[removeTodo, toggleTodo]}>
      <div className="todos-container">
        <header>
          <h1>Todo App</h1>
        </header>

        <div className="inp-container">
          <input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyDown={addTodo}
          />
        </div>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default App;
