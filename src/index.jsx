/*  Component */

import React from 'react'
import ReactDOM from 'react-dom'

 /* Import  App component  */

import App from './App'


 /* Get the root element from index html  */

const rootElement = document.getElementById('root')

 /* Render the App  */

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
