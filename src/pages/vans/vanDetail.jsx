import { useParams , useLocation , Link } from "react-router-dom"
import { useEffect , useState } from "react"
import { FaArrowCircleLeft } from "react-icons/fa";

export default function VanDetail(){
    const params = useParams()
    const location = useLocation()
    console.log(location)

    const [van , setVan] = useState(null)

    useEffect(()=>{
         fetch(`/api/vans/${params.id}`)
           .then(res => res.json())
           .then(data => setVan(data.vans))
           .catch(error => console.log('error fetching: ',error))
    },[params.id])

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
            {van ? (
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
            ) : <h1 className="text-center text-2xl font-bold">loading....</h1>}
          </div>
        </>
    )
}