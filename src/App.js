import React, { useState, useEffect } from 'react';
import './App.css';
//Importing components 
import Form from "./Components/Form";
import Todolist from "./Components/TodoList";
function App() {
 

  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
   //use effect 
   useEffect(() => {
    filterHandler();
   }, [todos,status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break; 
    }
  };

  return (
    <div className="App">
      <header> 
        <h1> To Do List </h1>
      </header>
      <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText ={setInputText} setStatus = {setStatus} />
      <Todolist filteredTodos = {filteredTodos} setTodos = {setTodos} todos = {todos} />
    </div>
  );
}

export default App;
