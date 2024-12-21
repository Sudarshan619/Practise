import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ToDoStore from './Redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={ToDoStore}>
      <App />
    </Provider>
  </StrictMode>,
)
