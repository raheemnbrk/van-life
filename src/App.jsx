import {createBrowserRouter , createRoutesFromElements , RouterProvider , Route } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Vans , {loader as vanLoader}  from "./pages/vans/vans"
import VanDetail , {loader as vansDetailLoader}  from "./pages/vans/vanDetail"
import Layout from "./components/layout"
import Dashboard from "./pages/host/dashboard"
import Review from "./pages/host/review"
import Income from './pages/host/income'
import Hostlayout from "./components/hostLayout"
import HostVans , {loader as hostVanLoader} from "./pages/host/hostVans"
import HostVanDetail , {loader as hostVanDetailLoader} from "./pages/host/hostVanDetail"
import HostVanInfo from "./pages/host/hostVanInfo"
import HostVanPricing from "./pages/host/hostVanPricing"
import HostVanPictures from "./pages/host/hostVanPictures"
import NotFound from "./pages/notFound"
import Error from "./components/error"
import Login from "./components/login"

import './server'

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>} errorElement={<Error/>} >
      <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans/>} loader={vanLoader} />
        <Route path="vans/:id" element={<VanDetail/>} loader={vansDetailLoader} />
            
        <Route path="host" element={<Hostlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="review" element={<Review/>}/>
          <Route path="vans" element={<HostVans/>} loader={hostVanLoader} />
          <Route path="vans/:id" element={<HostVanDetail/>} loader={hostVanDetailLoader} >
            <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPictures/>}/>
            </Route>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>} />
    </Route>
))

export default function App(){
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}