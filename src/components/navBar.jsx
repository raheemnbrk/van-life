import { NavLink , Link } from "react-router-dom"
import { HiOutlineUserCircle } from "react-icons/hi2";

export default function NavBar(){
    return(
        <>
          <div className="bg-primary px-8 py-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold uppercase"><Link>#vanlife</Link></h1> 

            <ul className="flex gap-8 items-center">
                <li className="text-xl text-text-gray capitalize">
                    <NavLink to={'host'} className={({isActive})=>isActive ? "text-black border-b-2 border-b-black" : ""} >
                      host
                    </NavLink>
                </li>

                <li className="text-xl text-text-gray capitalize">
                    <NavLink to={'about'} className={({isActive})=>isActive ? "text-black border-b-2 border-b-black" : ""}>
                        about
                    </NavLink>
                </li>

                <li className="text-xl text-text-gray capitalize">
                    <NavLink to={'vans'} className={({isActive})=>isActive ? "text-black border-b-2 border-b-black" : ""} >
                       vans
                    </NavLink>
                </li>

                <li className="text-2xl text-text-gray capitalize">
                    <NavLink to={'login'} className={({isActive})=>isActive ? "text-black border-b-2 border-b-black" : ""}>
                        <HiOutlineUserCircle/>
                    </NavLink>
                </li>
            </ul>
          </div>
        </>
    )
}