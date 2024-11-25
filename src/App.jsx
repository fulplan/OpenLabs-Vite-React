import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="./Pages/About" Component={About}/>
      <Route path="./Pages/Contact" Component={Contact}/>
     </Routes>
    </BrowserRouter>
  )
}


export default App;