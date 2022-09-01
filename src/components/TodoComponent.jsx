import React, {Component} from 'react'
import { Card } from '@mui/material';
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import "../styles/TodoComponent.css";

const TodoComponent = () => {
  return (
    <div className='container_todoComponent'>
      <Card 
        variant="outlined" 
        style={{
          backgroundColor: 'rgba(255, 0, 0, 0.050)',
          width: 500,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        <AddTodo />
        <TodoList />
      </Card>
    </div>
  )
}

export default TodoComponent