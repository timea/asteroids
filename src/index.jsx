import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import App from './App'
import Store from './client/store';
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Store>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </Store>
  </BrowserRouter>,
)
