import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure the path is correct to where you defined Game
import './index.css';  // Optional CSS file

ReactDOM.creatRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
