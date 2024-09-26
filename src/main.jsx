import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LajestContextProvider from './context/LajestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LajestContextProvider>
        <App />
      </LajestContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
