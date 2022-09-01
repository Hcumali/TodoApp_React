import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as api from "../api/request";
import {useTodoLayerValue} from '../context/TodoContext'

const AddTodo = () => {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    api.addTodo(todo).then((res) => {
      console.log("res: ", res);
      if (res.status == 201) {
        dispatch({
          type: "ADD_TODO",
          payload: res.data
        })
      }
    }).catch((err) => console.log(err));
  }

  return (
    <div className='AddTodo'>
      <div className='div1'>
        <TextField 
          id='textField_addTodo'
          label="Todo" 
          variant="filled" 
          focused
          fullWidth
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className='div2'>
        <Button 
          id='btn_addTodo' 
          variant="contained" 
          onClick={addTodo}
        >
          Add
        </Button>
      </div>
    </div>
  )
}

export default AddTodo