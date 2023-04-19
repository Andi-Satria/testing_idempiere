import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from 'react-router-dom'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css"; 

import "primeflex/primeflex.css";
import { routes } from './router/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
