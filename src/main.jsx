import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MetaTags from "./components/MetaTags";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetaTags />
    <App />
  </StrictMode>,
)
