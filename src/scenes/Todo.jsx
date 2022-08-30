import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "../styles/Todo.css"

const Todo = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/");
  }

  return (
    <div>
      <Button variant="contained" onClick={goLogin}>Login</Button>
    </div>  )
}

export default Todo