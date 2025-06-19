import { useLoaderData , Link , useSearchParams} from "react-router-dom"
import { getVans } from "../../api"

export async function loader(){
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
        <Link to={`${ele.id}`} key={ele.id} state={{search : searchParam.toString() ,type : typeFilter }}>
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
                    <li
                       onClick={()=>{setSearchParam({type : "simple"})}} 
                       className={`${typeFilter === "simple" ?"bg-third text-white":"border-2 border-orange-300"} font-semibold rounded-lg px-4 py-2 cursor-pointer transition-all duration-300`}>simple</li>
                    <li
                       onClick={()=>{setSearchParam({type : "rugged"})}} 
                       className={`${typeFilter === "rugged" ?"bg-green-900 text-white" :"border-2 border-orange-300"} font-semibold rounded-lg px-4 py-2 cursor-pointer transition-all duration-300`}>rugged</li>
                    <li
                       onClick={()=>{setSearchParam({type : "luxury"})}} 
                       className={`${typeFilter === "luxury" ?"bg-black text-white" :"border-2 border-orange-300"} font-semibold rounded-lg px-4 py-2 cursor-pointer transition-all duration-300`}>luxury</li>
                    {typeFilter && (
                        <li className="text-text-gray cursor-pointer" onClick={()=>{setSearchParam("")}}>
                           clear filter
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