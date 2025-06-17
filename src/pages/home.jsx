import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
          <div className="px-8 py-6 bg-primary">
            <div className='home-container'>
                <h1 className='text-6xl text-white font-semibold text-center '>You got the travel plans, we got the travel vans.</h1>
                <p className='text-white text-lg mx-auto'> Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='capitalize text-white px-4 py-2 cursor-pointer w-fit font-semibold rounded-lg bg-secondary mx-auto outline-0'>
                  <Link to={'vans'}>find your van</Link>
               </button>
            </div>
          </div>  
        </>
    )
}