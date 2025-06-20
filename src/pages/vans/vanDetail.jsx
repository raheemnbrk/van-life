import { useLoaderData, Link, useLocation, defer, Await } from "react-router-dom"
import { Suspense } from "react";
import { getVans } from "../../api"
import { FaArrowCircleLeft } from "react-icons/fa";

export function loader({ params }) {
    return defer({ van: getVans(params.id) })
}

export default function VanDetail() {
    const promisedVan = useLoaderData()
    const location = useLocation()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (
        <>
            <Suspense fallback={<h1 className="bg-primary text-2xl text-center font-semibold capitalize">loading..</h1>} >
                <Await resolve={promisedVan.van} >
                    {(van) => (
                        <>
                            <div className="px-8 py-6 bg-primary space-y-4">
                                <Link to={`..?${search}`} relative="path">
                                    <div className="flex gap-2 text-text-gray items-center">
                                        <FaArrowCircleLeft />
                                        <p>back to {type} vans</p>
                                    </div>
                                </Link>

                                <div className="bg-primary p-4 space-y-4">
                                    <img src={van.imageUrl} className="w-[300px] rounded-lg" />
                                    <p className={`px-4 py-2 rounded-lg text-white w-fit mt-2
                    ${van.type === "simple" ? "bg-secondary" : van.type === "rugged" ? "bg-green-900" : "bg-black"}`}>
                                        {van.type}
                                    </p>
                                    <h1 className="text-3xl font-bold">{van.name}</h1>
                                    <h1 className="text-xl font-semibold">${van.price}/day</h1>
                                    <p>{van.description}</p>
                                    <button className="bg-black text-white px-4 py-2 cursor-pointer rounded-lg text-lg font-semibold" >rent this van</button>
                                </div>
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
        </>
    )
}