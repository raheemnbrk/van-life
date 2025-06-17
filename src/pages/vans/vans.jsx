import { useLoaderData , Link , useSearchParams , NavLink} from "react-router-dom"
import { auth } from "../../auth"
import { getVans } from "../../api"


export async function loader(){
    await auth()
    return getVans()
}

export default function Vans(){
    const vans = useLoaderData()
    const [searchParam , setSearchParam] = useSearchParams()

    const typeFilter = searchParam.get("type")
    const filtredVans = typeFilter 
                       ?vans.filter(ele => ele.type.toLowerCase() === typeFilter) 
                       :vans
    
    const vansElements = filtredVans.map((ele)=>(
        <Link to={`${ele.id}`} key={ele.id}>
           <div key={ele.id} className="w-72 overflow-hidden gap-2 hover:scale-105 transition-all duration-300 cursor-pointer">
              <img src={ele.imageUrl} className="w-full h-72 rounded-lg" />

               <div>
                  <h1 className="text-xl font-bold">{ele.name}</h1>
                  <h1>${ele.price}/day</h1>
                </div>
                <p className={`px-4 py-2 rounded-lg text-white w-fit mx-auto pt-2
                   ${ele.type ==="simple" ? "bg-third" : ele.type === "rugged" ? "bg-green-900" : "bg-black"}`}>
                   {ele.type}
                </p>
           </div>
        </Link>
    ))
    return(
        <>
          <div className="bg-primary px-8 py-6">
             <h1 className="text-3xl font-bold text-center">Explore our vans options</h1>
             <div className="p-8 text-xl capitalize">
                <ul className="flex gap-16 justify-center">
                    <li onClick={()=>{setSearchParam("simple")}}>
                        <NavLink className={({isActive})=> isActive ?
                           "font-semibold rounded-lg bg-third px-4 py-2 text-white" : "font-semibold rounded-lg bg-third"
                        } >
                            simple
                        </NavLink>
                    </li>
                    <li onClick={()=>{setSearchParam("rugged")}}>
                        <NavLink className={({isActive})=> isActive ?
                           "font-semibold rounded-lg bg-green-900 text-white px-4 py-2" : "font-semibold rounded-lg bg-third"
                        } >
                            rugged
                        </NavLink>
                    </li>
                    <li onClick={()=>{setSearchParam("luxury")}}>
                        <NavLink className={({isActive})=> isActive ?
                           "font-semibold rounded-lg bg-black text-white px-4 py-2" : "font-semibold rounded-lg bg-third"
                        } >
                            luxury
                        </NavLink>
                    </li>
                    {typeFilter && (
                        <li onClick={()=>{setSearchParam("")}}>
                           luxury
                        </li>
                    )}
                </ul>
             </div>
             <div className="flex flex-wrap gap-6 justify-center bg-primary p-4 rounded-lg">
              {vansElements}
            </div>
          </div>
        </>
    )
}