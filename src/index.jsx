import React from 'react';
/* Import createRoot from react-dom */
import { createRoot } from 'react-dom'; 

 /* Import Pages */
import App from './App';
 /* createRoot from react-dom */
const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
