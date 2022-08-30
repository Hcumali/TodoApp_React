import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {

  }, [])

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  
  const goTodos = () => {
    navigate("/todo");
  }

  return (
    <div className="container">
      <Button variant="contained" onClick={goTodos}>Todos</Button>
    </div>
  )
}

export default Login