import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  
  const goTodos = () => {
    if (username.length < 1) {
      alert("Kullanıcı adı boş olamaz")
    }
    else {
      navigate("/todo");
    }
  }

  return (
    <div className="container">
      <TextField 
        id="username" 
        label="Username" 
        variant="filled" 
        focused
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button id='btn_login' variant="contained" onClick={goTodos}>Login</Button>
    </div>
  )
}

export default Login