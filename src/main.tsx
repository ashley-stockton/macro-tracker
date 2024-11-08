import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain=''
    clientId='ueoObpRFKbm6LmspWUlIoyko5zmP7jEF'
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <StrictMode>
      <App />
    </StrictMode>,
  </Auth0Provider>
)
