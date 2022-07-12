import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './todoList';
import Ternaire from './ternaire';
import Liste from './liste';
import ChangeState from './changestate';
import TodoList from './todoList';
import Form from './components/Form';
import Item from './components/Item';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />  
  </React.StrictMode>
);

