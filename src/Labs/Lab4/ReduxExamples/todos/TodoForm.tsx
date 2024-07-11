import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { useDispatch, useSelector } from "react-redux";
export default function TodoForm() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state: any) => state.todosReducer);
  //     {
  //   todo,
  //   setTodo,
  //   addTodo,
  //   updateTodo,
  // }: {
  //   todo: { id: string; title: string };
  //   setTodo: (todo: { id: string; title: string }) => void;
  //   addTodo: (todo: { id: string; title: string }) => void;
  //   updateTodo: (todo: { id: string; title: string }) => void;
  // }
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">
        {" "}
        Add{" "}
      </button>
      <button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        {" "}
        Update{" "}
      </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
