import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { RestauranteDemoApp } from './RestauranteDemoApp.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RestauranteDemoApp />
    </HashRouter>
  </React.StrictMode>,
)
