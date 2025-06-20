import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import LayOut from "./components/layOut"
import Home from "./pages/home"
import About from "./pages/about"
import LogIn  , {action as loginActoin , loader as logInLoader} from "./pages/logIn"
import Vans, { loader as vanLoader } from "./pages/vans/vans"
import VanDetail , {loader as vanDetailLoader} from "./pages/vans/vanDetail"
import Error from "./pages/error"
import HostLayout from "./components/hostLayout"
import Dashboard , {loader as dashBoardLoader} from "./pages/host/dashBoard"
import Income from "./pages/host/income"
import Review from "./pages/host/review"
import HostVans , {loader as hostVansLoader} from "./pages/host/hostVans"
import HostVanDetail , {loader as hostVanDetailLoader} from "./pages/host/hostVanDetail"
import HostVanPricing from "./pages/host/hostVanPricing"
import HostVanPicture from "./pages/host/hostVanPictures"
import HostVanInfo from "./pages/host/hostVanInfo"
import NotFound from "./pages/notFound"

import { auth } from "./auth"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayOut />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LogIn />} action={loginActoin} loader={logInLoader}/>
        <Route path="vans" element={<Vans />} loader={vanLoader} />
        <Route path="vans/:id" element={<VanDetail/>} loader={vanDetailLoader} />

        <Route path="host" element={<HostLayout/>}>
           <Route index element={<Dashboard/>} loader={dashBoardLoader}/>
           <Route path="income" element={<Income/>}/>
           <Route path="review" element={<Review/>}/>
           <Route path="hostVans" element={<HostVans/>} loader={hostVansLoader} />
           <Route path="hostVans/:id" element={<HostVanDetail/>} loader={hostVanDetailLoader}>
            <Route index element={<HostVanInfo/>}/>
            <Route path="pricing" element={<HostVanPricing/>}/>
            <Route path="photos" element={<HostVanPicture/>}/>
           </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
