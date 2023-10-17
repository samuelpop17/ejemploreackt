import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import SaludoPadre from './components/SaludoPadre';
import Matematicas from './components/Matematicas';
import Contador from './components/Contador';
import Car from './components/Car';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <Car marca="audi" modelo="Q7" aceleracion="30" velocidadMaxima="230"></Car>
   <Car marca="lambo" modelo="performante" aceleracion="60" velocidadMaxima="330"></Car>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
