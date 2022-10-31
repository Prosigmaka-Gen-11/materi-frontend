import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FamilyProvider from "./FamilyProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FamilyProvider>
      <App />
    </FamilyProvider>
  // </React.StrictMode>
)
