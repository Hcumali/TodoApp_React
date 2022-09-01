import React, {useState, useEffect} from 'react'
import * as api from '../api/request.js';
import Card from "./Card";
import {useTodoLayerValue} from '../context/TodoContext'

const TodoList = () => {
  const [{todos}, dispatch] = useTodoLayerValue();

  useEffect(() => {
    api.getTodoList().then((res) => {
      if (res.status) {
        dispatch({
          type: "SET_TODO",
          payload: res.data.reverse()
        })
      }
    })
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <div className='container_todoList'>
      {
        todos.map((todo) => 
        (
          <Card key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default TodoList

