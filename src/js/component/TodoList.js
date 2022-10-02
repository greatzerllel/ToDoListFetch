import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteAllHandler = () => {
    setTodos("");
  };
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
      <div>
        <header>
          <button onClick={deleteAllHandler} className="trash-btn">
            <i className="fa-solid fa-ban"></i>
          </button>
        </header>
      </div>
    </>
  );
};

export default TodoList;
