import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

import "bootstrap/dist/css/bootstrap.min.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ShoppingCartProvider>
          <App />
     </ShoppingCartProvider>

  </StrictMode>,
)
