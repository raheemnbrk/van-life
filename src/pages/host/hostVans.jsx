import { Link , useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

export async function loader(){
    return getHostVans()
}

export default function HostVans(){
    const vans = useLoaderData()

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