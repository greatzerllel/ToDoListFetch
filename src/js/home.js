import React, { useState } from "react";
import DefaultMessage from "./component/DefaultMessage";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

//create your first component
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="App">
        <header>
          <b>ToDo List</b>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          
        />
        {todos=='' ? <DefaultMessage status={status} />:<TodoList setTodos={setTodos} todos={todos} setStatus={setStatus} />}
        
        
      </div>
    </>
  );
};

export default Home;
