import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Attach a global toggle for dark mode
window.toggleDark = () => {
  document.documentElement.classList.toggle('dark');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
