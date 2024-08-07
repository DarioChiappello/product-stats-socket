import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
