import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText == "") {
      alert("Introduce tu task");
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ])
      fetch('https://assets.breatheco.de/apis/fake/todos/user/pruebanumero116', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
   /*  body: JSON.stringify(todos) */
  })
  .then(resp => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
       // Intentará devolver el resultado exacto como cadena (string)
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
      //manejo de errores
      console.error(error);
  });;
    }
    setInputText("");
  };

  return (
    <>
      <form>
        <input
          placeholder="What's need to be done?"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
