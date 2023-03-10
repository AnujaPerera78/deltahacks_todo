import React from "react";
//Import Components 
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                
                {todos.map((todo) => (

                <Todo 
                setTodos = {setTodos} 
                todos = {todos}
                text = {todo.text}
                todo = {todo}
                />
                

                ))}

            </ul>
            
          
        </div>
    );
};

export default TodoList;