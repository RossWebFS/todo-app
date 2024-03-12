import { TodoList } from "./components/TodoList";
import { Context } from "./Context";
import todoReducer from "./Reducer";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [todoTitle, setTodoTitle] = useState("");

  const [state, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("todos"))
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };

  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) todo.completed = !todo.completed;
  //       return todo;
  //     })
  //   );
  // };

  return (
    <Context.Provider value={{ dispatch }}>
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
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
