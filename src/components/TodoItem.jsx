import { useState, useContext } from "react";
import { Context } from "../Context";

export const TodoItem = ({ id, title, completed }) => {
  //   const [checked, setChecked] = useState(false);
  const [removeTodo, toggleTodo] = useContext(Context);
  let cls = "info";

  if (completed) {
    cls += " checked";
  }

  return (
    <li className="todo-container">
      <div className={cls}>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>
      </div>
      <i onClick={() => removeTodo(id)}>&times;</i>
    </li>
  );
};
