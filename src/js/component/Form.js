import React from "react";


const Form = ({ setInputText, setTodos, todos, inputText,setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText == ''){
      alert('Introduce tu task')
    }else
    {setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);}
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
