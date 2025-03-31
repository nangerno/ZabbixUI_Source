import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthContainer from './AuthContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContainer />
  </StrictMode>,  
)