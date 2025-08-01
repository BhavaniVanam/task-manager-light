import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import "./styles/app.css"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);
