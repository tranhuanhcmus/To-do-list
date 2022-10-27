import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./Components/TodoForm/todoForm";
import TodoList from "./Components/TodoList/todoList";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoEdit, setTodoEdit] = useState("");
  const [IDedit, setIDedit] = useState("");
  const [todos, setTodos] = useState([]);
  const [addMode, setAddMode] = useState(true);

  //load todos
  useEffect(() => {
    const todoJSON = localStorage.getItem("todos");
    const retrievedTodos = JSON.parse(todoJSON);
    if (retrievedTodos.length > 0) {
      setTodos(retrievedTodos);
    }
  }, []);
  //save todos
  useEffect(() => {
    const todoJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todoJSON);
  }, [todos]);
  const onChangeInput = (e) => {
    if (addMode) {
      setTodoName(e.target.value);
    } else setTodoEdit(e.target.value);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setAddMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addMode) {
      const newTodo = {
        id: uuidv4(),
        name: todoName,
      };
      setTodos([...todos, newTodo]);
      setTodoName("");
    } else {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === IDedit) return { ...todo, name: todoEdit };
        return todo;
      });
      setTodos(updatedTodos);
      setAddMode(true);
    }
  };
  const handleEdit = (id) => {
    const item = todos.find((todo) => todo.id === id);
    setAddMode(false);
    setTodoEdit(item.name);
    setIDedit(item.id);
  };
  return (
    <div id="App">
      <TodoForm
        addMode={addMode}
        onChangeInput={onChangeInput}
        value={addMode ? todoName : todoEdit}
        handleSubmit={handleSubmit}
      ></TodoForm>
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        ></TodoList>
      ) : (
        <p className="msg">There are no Todos </p>
      )}
    </div>
  );
}

export default App;
