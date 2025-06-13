import { useRouteError } from "react-router-dom"

export default function Error(){
    const error = useRouteError()
    console.log(error)
    return(
        <>
          <div className="p-4 text-center bg-primary justify-center">
            <h1 className="text-3xl font-bold capitalize">Error:{error.message}</h1>
            <p className="capitalize">{error.status} - {error.statusText}</p>
          </div>
        </>
    )
}