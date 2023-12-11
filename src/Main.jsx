import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './Styles/Reset.css.js'
import { PratosProvider } from './providers/PratosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset/>
    <PratosProvider>
      <App />
    </PratosProvider>
    
  </React.StrictMode>,
)
