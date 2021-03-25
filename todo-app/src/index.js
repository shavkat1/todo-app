import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoContextProvider } from './context/todo-context'
import { UserContextProvider } from './context/user-context'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
