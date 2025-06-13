import { useLocation , Link , useLoaderData } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa";
import { getVans } from "../../api";

export async function loader({params}) {
  console.log(params)
  return getVans(params.id)
}

export default function VanDetail(){
    const location = useLocation()
    const van = useLoaderData()

    const search = location.state?.search||""
    const type = location.state?.type||"all"

    return(
        <>
          <div className="p-4 flex flex-col space-y-4 ">
            <Link to={`..${search}`} relative="path" >
              <div className="flex gap-2 text-text-gray items-center">
                <FaArrowCircleLeft/>
                <p>back to {type} vans</p>
              </div>
            </Link>
                <div className="bg-primary p-4 space-y-4">
                    <img src={van.imageUrl} className="w-[300px] rounded-lg" />
                    <p className={`px-4 py-2 rounded-lg text-white w-fit mt-2
                       ${van.type ==="simple" ? "bg-third" : van.type === "rugged" ? "bg-green-900" : "bg-black"}`}>
                        {van.type}
                    </p>
                    <h1 className="text-3xl font-bold">{van.name}</h1> 
                    <h1 className="text-xl font-semibold">${van.price}/day</h1>
                    <p>{van.description}</p>
                    <button className="bg-black text-white px-4 py-2 cursor-pointer rounded-lg text-lg font-semibold" >rent this van</button>
                </div>
          </div>
        </>
    )
}