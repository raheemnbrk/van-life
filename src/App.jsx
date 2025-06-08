import { BrowserRouter , Routes , Route } from "react-router-dom"

import NavBar from "./components/navBar"
import Home from "./components/home"
import About from "./components/about"
import Vans from "./components/vans"
import VanDetail  from "./components/vanDetail"

import './server'

export default function App(){
  return(
    <>
      <BrowserRouter>
          <NavBar/>
          
          <Routes>
             <Route path="/" element={<Home/>}/> 
             <Route path="/about" element={<About/>}/>  
             <Route path="/vans" element={<Vans/>}/>
             <Route path="/vans/:id" element={<VanDetail/>}/>
          </Routes> 
      </BrowserRouter>
    </>
  )
}