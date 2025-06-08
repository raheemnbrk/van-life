import { FaRegCopyright } from "react-icons/fa";

export default function Footer(){
    const date = new Date().getFullYear()
    return(
        <>
          <div className="p-4">
            <div className="p-2 rounded-lg bg-black text-text-gray flex gap-4 text-xl justify-center items-center">
              <FaRegCopyright/>
              <h1>{date} copyright</h1>
            </div>
          </div>
        </>
    )
}