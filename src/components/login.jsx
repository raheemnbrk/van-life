export default function Login(){
    return(
        <>
          <div className="p-4">
            <div className="flex flex-col space-y-4 bg-primary rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold capitalize">sign in to your account</h1>

            <div className="justify-center">
                <form className="flex flex-col space-y-4">
                    <input 
                      type="email" 
                      placeholder="email"
                      className="px-4 py-2 rounded-lg bg-white outline-0 border border-text-gray w-[400px] mx-auto"
                    />
                    <input 
                       type="password" 
                       placeholder="password"
                       className="px-4 py-2 rounded-lg bg-white outline-0 border border-text-gray w-[400px] mx-auto"
                    />
                    <button className="bg-secondary text-white px-4 py-2 rounded-lg w-[400px] cursor-pointer text-xl font-semibold mx-auto">Log in</button>
                </form>
            </div>
          </div> 
          </div>
        </>
    )
}