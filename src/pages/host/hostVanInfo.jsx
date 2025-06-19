import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){

    const {van} = useOutletContext()
    
    return(
        <>
             <div className="py-4 px-8 space-y-1.5">
                <div  className="flex gap-2">
                    <span className="font-semibold capitalize">name:</span>
                    <span>{van.name}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold capitalize">category:</span>
                    <span>{van.name}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold capitalize">desription:</span>
                    <span>{van.description}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold capitalize">vaisibility:</span>
                    <span>public</span>
                </div>
             </div>   
        </>
    )
}