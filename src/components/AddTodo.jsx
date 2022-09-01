import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as api from "../api/request";
import {useTodoLayerValue} from '../context/TodoContext'

const AddTodo = () => {
  const textInput = useRef(null);

  const [{todos}, dispatch] = useTodoLayerValue();
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    var length = document.getElementById("textField_addTodo").value.length;
    if (length <= 3) {
      alert("Todo 3 karakterden küçük olamaz.");
    }
    else {
      api.addTodo(todo).then((res) => {
        if (res.status === 201) {
          dispatch({
            type: "ADD_TODO",
            payload: res.data
          })
          setTodo("");
        }
      }).catch((err) => console.log(err));
    }
  }

  return (
    <div className='AddTodo'>
      <div className='div1'>
        <TextField 
          ref={textInput}
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