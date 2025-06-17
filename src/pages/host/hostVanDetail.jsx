import { useLoaderData , Link , Outlet , NavLink } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa";
import { getHostVans} from "../../api";

export async function loader({params}){
  return getHostVans(params.id)
}

export default function HostVanDetail(){
    
    const van = useLoaderData()

    return(
        <>
          <div className="p-4">
            <div  className="flex flex-col space-y-4 p-4 bg-primary">
            
            <Link to={".."} relative="path" >
              <div className="flex gap-2 text-text-gray items-center">
                <FaArrowCircleLeft/>
                <p>back to all vans</p>
              </div>
            </Link>
            {
                van ?
                 (
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex gap-8 p-8 items-center">
                            <img src={van.imageUrl} className="w-46 rounded-lg" />
                            <div className="space-y-4">
                                <p className={`px-4 py-2 rounded-lg text-white w-fit mt-2
                                   ${van.type ==="simple" ? "bg-third" : van.type === "rugged" ? "bg-green-900" : "bg-black"}`}>
                                   {van.type}
                                </p>
                                <h1 className="text-3xl font-bold">{van.name}</h1>
                                <h1 className="text-xl font-semibold">${van.price}/day</h1>
                            </div>
                        </div>

                        <ul className="flex gap-8 capitalize ml-8 text-lg font-semibold text-text-gray">
                            <li>
                              <NavLink to={"."} end className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize" : "text-xl font-semibold capitalize text-text-gray"}>
                                 detail
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={"pricing"} className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize" : "text-xl font-semibold capitalize text-text-gray"}>
                                pricing  
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={"photos"} className={({isActive})=>isActive ? "text-xl font-semibold text-black border-b-2 border-b-black capitalize" : "text-xl font-semibold capitalize text-text-gray"}>
                                photos
                              </NavLink>
                            </li>
                        </ul>
                        <Outlet context={{van}} />
                    </div>
                 )
                 :<h1>...loading</h1>
            }
          </div>
          </div>
        </>
    )
}