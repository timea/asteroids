import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Store from './client/store';
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
)
