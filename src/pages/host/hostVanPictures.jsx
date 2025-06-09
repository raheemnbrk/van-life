import { useOutletContext } from "react-router-dom"

export default function HostVanPicture(){
    const {van} = useOutletContext()
    return(
        <>
          <div className="px-8 py-4 w-40">
            <img src={van.imageUrl} alt={van.name} className="w-full rounded-lg " />
          </div>
        </>
    )
}