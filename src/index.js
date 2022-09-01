import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Todo from './pages/Todo';
import { TodoLayer } from "./context/TodoContext"
import reducer, {initialState} from './context/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoLayer initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  </TodoLayer>
);
