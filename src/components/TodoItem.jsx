import { useContext } from "react";
import { Context } from "../Context";

export const TodoItem = ({ id, title, completed }) => {
  //   const [checked, setChecked] = useState(false);
  const { dispatch } = useContext(Context);
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
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id,
            })
          }
        />
        <span>{title}</span>
      </div>
      <i
        onClick={() =>
          dispatch({
            type: "remove",
            payload: id,
          })
        }
      >
        &times;
      </i>
    </li>
  );
};
