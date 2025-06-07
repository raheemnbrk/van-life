import { BrowserRouter , Routes , Route } from "react-router-dom"

import NavBar from "./components/navBar"
import Home from "./components/home"
import About from "./components/about"

export default function App(){
  return(
    <>
      <BrowserRouter>
          <NavBar/>
          
          <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/about" element={<About/>}/>  
          </Routes> 
      </BrowserRouter>
    </>
  )
}