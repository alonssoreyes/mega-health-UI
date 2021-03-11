import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
require('dotenv').config(); //Import env vars

axios.defaults.baseURL = process.env.REACT_APP_API_HOST || 'http://localhost:3001';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);