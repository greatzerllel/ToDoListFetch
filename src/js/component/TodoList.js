import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const deleteAllHandler = () => {
    setTodos("");
    fetch('https://assets.breatheco.de/apis/fake/todos/user/pruebanumero117', {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    
  })
  .then(resp => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
       // Intentará devolver el resultado exacto como cadena (string)
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); 
  })
  .catch(error => {
      //manejo de errores
      console.error(error);
  });;
  };
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.label}
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
