import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Store } from './features/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </Provider>
  ,
)

//have one doubt is there any differnece warp provider with BrowserRouter or vice versa ?