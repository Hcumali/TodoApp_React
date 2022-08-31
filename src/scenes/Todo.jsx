import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TodoComponent from '../components/TodoComponent';
import { useNavigate } from "react-router-dom";
import "../styles/Todo.css"

const Todo = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  const goLogin = () => {
    navigate("/");
  }

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [])
  

  return (
    <div className='container'>
      <div className='username'>Hoşgeldin <strong>{username}</strong></div>
      <TodoComponent />
      <Button variant="contained" onClick={goLogin}>Logout</Button>
    </div>  )
}

export default Todo