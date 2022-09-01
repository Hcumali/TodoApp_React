import React, {useState, useEffect} from 'react'
import * as api from '../api/request.js';
import {useTodoLayerValue} from '../context/TodoContext'

const TodoList = () => {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [_todos, setTodos] = useState([]);

  useEffect(() => {
    api.getTodoList().then((res) => {
      if (res.status) {
        console.log(res.data.reverse());
        setTodos(res.data)
      }
    })
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <div className='container_todoList'>
      {
        todos.map((todo) => 
        (
          <div className='todo' key={todo.id}>
            {todo.id}_ 
            {todo.content}_  
            {todo.isCompleted.toString()} 
          </div>
        ))
      }
    </div>
  )
}

export default TodoList