import { useState , useEffect } from "react"
import { Link } from "react-router-dom"

export default function HostVans(){

    const [vans , setVans] = useState([])

    useEffect(()=>{
        fetch("/api/host/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
    },[])

    console.log(vans)

    const vansElement = vans.map(ele =>(
        <Link to={`${ele.id}`} key={ele.id}>
            <div className="bg-white rounded-lg p-4 flex items-center gap-16" >
                <img src={ele.imageUrl} className="w-16 rounded-lg " />
                <div>
                    <h1 className="font-bold text-xl">{ele.name}</h1>
                    <p className="font-semibold">${ele.price}/day</p>
            </div>
        </div>
        </Link>
    ))
    return(
        <>
          <div className="p-4">
            <div className="bg-primary flex flex-col space-y-4 p-8 rounded-lg">
                {vansElement}
            </div>
          </div>
        </>
    )
}