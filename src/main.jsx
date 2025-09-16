import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./App.css";
import '../styles/more.css'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { store } from '../js/routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
