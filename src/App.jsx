import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" Component={Home}/>
      <Route path="./About" Component={About}/>
      <Route path="/contact-us" Component={Contact}/>
     </Routes>
    </BrowserRouter>
  )
}


export default App;