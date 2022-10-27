import "./todo.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";

const Todo = ({ todo, deleteTodo, handleEdit }) => {
  const [done, setDone] = useState(false);
  return (
    <article className="item">
      <input type="checkbox" onChange={() => setDone(!done)} />
      <p className={done ? "done-item" : ""}>{todo.name}</p>
      <div className="btn-group">
        <button onClick={() => handleEdit(todo.id)}>
          <AiFillEdit></AiFillEdit>
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete></AiFillDelete>
        </button>
      </div>
    </article>
  );
};
export default Todo;
