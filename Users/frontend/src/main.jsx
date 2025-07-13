// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambié a 'react-dom/client' para la nueva API de React 18
import App from './App';  // Asegúrate de que esto esté apuntando a App.jsx
import './index.css';  // Si tienes un archivo de estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
