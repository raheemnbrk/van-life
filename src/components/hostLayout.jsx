import { Outlet , NavLink } from "react-router-dom"

export default function HostLayout(){
    return(
        <>
          <div className="px-8 py-6 bg-primary" >
            <ul className="flex gap-16">
              <li>
                <NavLink to={'.'} end className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize" : "text-xl font-semibold capitalize text-text-gray"}>
                    dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to={'income'} className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize"  : "text-xl font-semibold capitalize text-text-gray"}>
                    income
                </NavLink>
              </li>
              <li>
                <NavLink to={'hostVans'} className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize"  : "text-xl font-semibold capitalize text-text-gray"}>
                  vans
                </NavLink>
              </li>
              <li>
                <NavLink to={'review'} className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize" : "text-xl font-semibold capitalize text-text-gray"}>
                    review  
                </NavLink>
              </li>
            </ul>

             <Outlet/>
          </div>
        </>
    )
}