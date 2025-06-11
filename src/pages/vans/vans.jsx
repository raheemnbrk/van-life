import { useEffect , useState } from "react";
import { Link , useSearchParams } from "react-router-dom";

export default function Vans(){
  const [searchParam , setSearchParam] = useSearchParams()
  const [vans , setVans] = useState([])

  const typeFilter = searchParam.get("type")

  useEffect(()=>{
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
      .catch(error => console.log('fetch data: ',error))
  },[])
  console.log(searchParam.toString())

  const filteredVans = typeFilter ?
                       vans.filter(ele => ele.type.toLowerCase() === typeFilter)
                       : vans   

  const vansElements = filteredVans.map(ele => (
       <Link key={ele.id} to={`${ele.id}`} state={{search : `?${searchParam.toString()}` , type : typeFilter}}>
          <div className="w-72 overflow-hidden gap-2 hover:scale-105 transition-all duration-300 cursor-pointer">
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
      <div className="p-4 flex flex-col space-y-4 text-center">
        <h1 className="text-3xl font-bold">Explore our vans options</h1>
        <div>
          <ul className="flex gap-8 items-center justify-center">
            <li className="px-4 py-2 border border-secondary bg-primary rounded-lg font-semibold capitalize cursor-pointer"
                onClick={()=>{setSearchParam({type : "simple"})}} 
            >simple</li>
            <li className="px-4 py-2 border border-secondary bg-primary rounded-lg font-semibold capitalize cursor-pointer"
                onClick={()=>{setSearchParam({type : "rugged"})}} 
            >rugged</li>
            <li className="px-4 py-2 border border-secondary bg-primary rounded-lg font-semibold capitalize cursor-pointer"
                onClick={()=>{setSearchParam({type : "luxury"})}} 
            >luxury</li>
            {typeFilter && (
              <li className="text-text-gray cursor-pointer capitalize"
                onClick={()=>{setSearchParam("")}} 
              >clear filter</li>
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