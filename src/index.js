/*
 * @Author: mjk
 * @Date: 2021-01-04 14:41:57
 * @LastEditTime: 2021-01-04 15:08:50
 * @LastEditors: Please set LastEditors
 * @Description: react 后台
 * @FilePath: \reactAdmin\react-admin\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
