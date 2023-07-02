import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IsMobileProvider } from './contexts/IsMobileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <IsMobileProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IsMobileProvider>
)
