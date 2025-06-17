import NavBar from "./navBar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"

export default function LayOut(){
    return(
        <>
          <NavBar/>
          <Outlet/>
          <Footer/>
        </>
    )
}