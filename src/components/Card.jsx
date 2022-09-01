import React from 'react'
import * as api from "../api/request";
import Button from '@mui/material/Button';
import {useTodoLayerValue} from '../context/TodoContext'

const Card = ({todo}) => {
  const [{todos}, dispatch] = useTodoLayerValue();

  const checkboxHandler = () => {
    todo.isCompleted = !todo.isCompleted;

    api.updateTodo(todo).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "UPDATE_TODO",
          payload: res.data
        }) 
      }
    }).catch(err => console.log(err))
  }

  const buttonHandler = () => {
    api.deleteTodo(todo.id).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "DELETE_TODO",
          payload: res.data.id
        }) 
      }
    }).catch(err => console.log(err))
  }
  
  return (
    <div className='todo_card'>
      <div className='content'>
        <strong>{todo.content}</strong>
      </div>
      <div className='actions'>
        <input 
          id='input_box'
          type={'checkbox'} 
          checked={ todo.isCompleted }
          onChange={ checkboxHandler } 
        />
        <Button 
          id='btn_delete' 
          variant="contained" 
          size='small'
          onClick={buttonHandler}
        >
          DELETE
        </Button>
      </div>
    </div>
  )
}

export default Card