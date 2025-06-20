import { getHostVans } from "../../api"
import { auth } from "../../auth";
import { FaStar } from "react-icons/fa6";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export async function loader({ request }) {
  await auth(request)
  return defer({ vans: getHostVans() })
}

export default function Dashboard() {
  const promisedVans = useLoaderData()
  const renderVansElemets = (vans) => {
    const vansElement = vans.map(ele => (
      <div className="flex items-center p-4 bg-white rounded-lg gap-8" key={ele.id} >
        <img className="w-[50px] rounded-lg" src={ele.imageUrl} />
        <h1 className="text-xl font-bold capitalize" >{ele.name}</h1>
      </div>
    ))

    return (
      <>
        <div className="flex flex-col space-y-4 p-4">
          {vansElement}
        </div>
      </>
    )
  }
  return (
    <>
      <div className="py-6 px-8">
        <div className="bg-fourth px-8 py-6 rounded-lg space-y-6" >
          <h1 className="text-4xl font-bold">welcome!</h1>
          <div className="flex justify-between capitalize">
            <p className="text-text-gray text-xl">income last <span className="border-b-2 border-b-black text-black ">30 days</span></p>
            <Link to={"income"} ><p className="text-text-gray text-lg font-semibold">details</p></Link>
          </div>
          <p className="text-3xl font-bold">2245$</p>
        </div>

        <div className="bg-third px-8 py-6 rounded-lg">
          <div className="flex justify-between">
            <div className="flex gap-8">
              <h1 className="text-2xl font-bold capitalize">review score</h1>
              <h1 className="flex items-center gap-2 text-lg font-bold"><FaStar className="text-secondary text-lg" />5/5</h1>
            </div>
            <Link to={"review"} ><p className="text-text-gray text-lg font-semibold capitalize">details</p></Link>
          </div>
        </div>

        <Suspense fallback={<h1 className="text-2xl text-center font-semibold capitalize">loading..</h1>}>
          <Await resolve={promisedVans.vans} >
            {(vans) => (
              <div className="mt-4 px-4">
                <div className="flex justify-between">
                  <h1 className="text-3xl font-bold capitalize">Explore Our Vans</h1>
                  <Link to={"hostVans"} >
                    <p className="text-text-gray text-lg font-semibold capitalize">view details</p>
                  </Link>
                </div>

                {renderVansElemets(vans)}
              </div>

            )}
          </Await>
        </Suspense>
      </div>
    </>
  )
}