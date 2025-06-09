import { BrowserRouter , Routes , Route } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Vans from "./pages/vans/vans"
import VanDetail  from "./pages/vans/vanDetail"
import Layout from "./components/layout"
import Dashboard from "./pages/host/dashboard"
import Review from "./pages/host/review"
import Income from './pages/host/income'
import Hostlayout from "./components/hostLayout"
import HostVans from "./pages/host/hostVans"
import HostVanDetail from "./pages/host/hostVanDetail"
import HostVanInfo from "./pages/host/hostVanInfo"
import HostVanPricing from "./pages/host/hostVanPricing"
import HostVanPictures from "./pages/host/hostVanPictures"

import './server'

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path="vans/:id" element={<VanDetail/>}/>
            
            <Route path="host" element={<Hostlayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="review" element={<Review/>}/>
              <Route path="vans" element={<HostVans/>}/>
              <Route path="vans/:id" element={<HostVanDetail/>}>
                 <Route index element={<HostVanInfo/>}/>
                 <Route path="pricing" element={<HostVanPricing/>}/>
                 <Route path="photos" element={<HostVanPictures/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}