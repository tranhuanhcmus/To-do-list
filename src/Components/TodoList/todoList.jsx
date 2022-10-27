import "./todoList.css";
import Todo from "../Todo/Todo";

const todoList = ({ todos, deleteTodo, handleEdit }) => {
  return (
    <section>
      {todos.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        ></Todo>
      ))}
    </section>
  );
};
export default todoList;
