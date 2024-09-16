// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ShopContextProvider } from './contextApi/ShopApi.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store = {store}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Provider>
  </BrowserRouter>
)
