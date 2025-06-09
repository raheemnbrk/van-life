import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const {van} = useOutletContext()
    return(
        <>
          <div className="flex items-center text-2xl px-8 py-4">
            <span className="font-bold">${van.price}</span>
            <span>/Day</span>
          </div>
        </>
    )
}