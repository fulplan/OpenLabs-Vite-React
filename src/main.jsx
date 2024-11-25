import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from  '/Pages/Home'
import About from  '/Pages/About'
import Contact from  '/Pages/Contact'

// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={Home}/>
   <Route path="/about-us" element={About}/>
   <Route path="/contact-us" element={Contact}/>
  </Routes>
 </BrowserRouter>
)
