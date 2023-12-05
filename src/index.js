import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToDoState } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoState>
      <App />
    </ToDoState>
  </React.StrictMode>,
  document.getElementById('root')
);
