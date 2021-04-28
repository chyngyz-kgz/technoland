import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

//Добавление токена в качестве headers по умолчанию
axios.defaults.headers.common['Authorization'] = 'bearer' + cookies.get('techCookie');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

