import { useLoaderData , Link , Outlet } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa";
import { getHostVans, getVans } from "../../api";

export async function loader({params}){
  return getVans(params.id)
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
                            <Link to={"."}>
                              <li className="hover:text-black hover:border-b-2 cursor-pointer hover:border-black">details</li>
                            </Link>
                            <Link to={"pricing"}>
                              <li className="hover:text-black hover:border-b-2 cursor-pointer hover:border-black">pricing</li> 
                            </Link>
                            <Link to={"photos"}>
                              <li className="hover:text-black hover:border-b-2 cursor-pointer hover:border-black">photos</li>
                            </Link>
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