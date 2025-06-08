import { Link, Outlet } from "react-router-dom"

export default function Hostlayout(){
    return(
        <>
          <div>
            <ul className="flex gap-8 text-lg font-semibold text-text-gray capitalize p-4">
                <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer" >
                    <Link to={"/host"}>dashboard</Link>
                </li>
                <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
                    <Link to={"/host/income"}>income</Link>
                </li>
                <li className="hover:text-black hover:border-b-2 hover:border-black cursor-pointer">
                    <Link to={"/host/review"}>review</Link>
                </li>
            </ul>
 
            <Outlet/> 
          </div>
        </>
    )
}