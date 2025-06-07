import img2 from '../assets/images/about-hero.png'

export default function About(){
    return(
        <>
          <div className='p-4 flex flex-col space-y-4'>
            <div className='rounded-md w-full  overflow-hidden'>
                <img className='object-cover w-full max-w-[400px] h-auto rounded-lg mx-auto' src={img2} />
            </div>
            <div className='flex flex-col space-y-8 p-4 bg-primary'>
                <h1 className='text-5xl font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className='rounded-lg p-8 justify-center bg-third'>
                     <h1 className='text-2xl font-bold'>Your Destination is waiting</h1>
                     <h1 className='text-2xl font-bold'>Your van is ready</h1>
                     <button className='rounded-lg bg-black text-white px-4 py-2 cursor-pointer mt-8 capitalize'>explore our vans</button>
                     
                </div>
            </div>
          </div>
        </>
    )
}