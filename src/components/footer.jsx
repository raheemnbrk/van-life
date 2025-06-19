import { LuCopyright } from "react-icons/lu";

export default function Footer(){
    const data = new Date().getFullYear()
    return(
        <>
          <div className="px-8 py-6 bg-primary">
            <div className="flex gap-2 items-center justify-center text-text-gray bg-black rounded-xl p-4">
                <LuCopyright className="text-xl"/>
                <h1 className="capitalize text-2xl" >{data} copyrights</h1>
            </div>
          </div>
        </>
    )
}