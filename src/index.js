import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; /* app.js ko index.js m import kiya h */
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); /*creating virtual DOM whose name is"root"*/
/*render mtlb dikhana */
/*app ko dikha rha h*/
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
