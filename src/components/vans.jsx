import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

export default function vans(){
  const [vans , setVans] = useState([])

  useEffect(()=>{
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
      .catch(error => console.log('fetch data: ',error))
  },[])

  const vansElements = vans.map(ele => (
       <Link to={`/vans/${ele.id}`}>
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
      <div className="p-4 flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-bold">Explore our vans options</h1>
        <div className="flex flex-wrap gap-6 justify-center bg-primary p-4 rounded-lg">
          {vansElements}
        </div>
      </div>
    </>
  )
}