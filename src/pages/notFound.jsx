import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <>
          <div className="bg-primary flex flex-col space-y-8 p-4">
            <h1 className="text-3xl font-bold mx-auto capitalize" >sorry the page you are looking for is not available</h1>
            <Link to={".."} className="text-white bg-black text-xl rounded-lg px-4 py-2 w-fit cursor-pointer mx-auto capitalize"><button>back to home</button></Link>
          </div>
        </>
    )
}