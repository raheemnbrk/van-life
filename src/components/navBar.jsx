import { Routes , Route, Link } from "react-router-dom"

export default function NavBar(){
    return(
        <>
          <div className="px-4 pt-2">
            <div className="bg-primary px-8 py-8 flex justify-between items-center rounded-t-xl">
                <h1 className="text-3xl font-bold uppercase cursor-pointer"><Link to={"/"}>#vanlife</Link></h1>

                <ul className="flex gap-8 items-center capitalize text-text-gray text-lg">
                    <li className="cursor-pointer focus:text-black">
                       <Link to={"/about"}>about</Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link>vans</Link>
                    </li>
                </ul>
            </div>
          </div>
        </>
    )
}