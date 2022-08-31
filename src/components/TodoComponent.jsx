import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import "../styles/TodoComponent.css";

const TodoComponent = () => {
  return (
    <div className='container1'>
        <AddTodo />
        <TodoList />
    </div>
  )
}

export default TodoComponent