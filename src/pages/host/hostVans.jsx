import { getHostVans } from "../../api"
import { auth } from "../../auth"
import { useLoaderData , Link } from "react-router-dom"

export async function loader({request}){
    await auth(request)
    return getHostVans()
}

export default function HostVans(){
  const van = useLoaderData()

   const vansElement = van.map(ele =>(
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
     <div className="px-8 py-6 bg-primary">
        <div className="bg-primary flex flex-col space-y-4 p-8 rounded-lg">
          {vansElement}
        </div>
      </div>
    </>
    )
}