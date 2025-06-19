import { Form , redirect , useActionData , useLoaderData, useNavigation } from "react-router-dom"
import { getUser } from "../api"

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  const pathName = new URL(request.url).pathname
  try{
    const data = await getUser(email , password)
    localStorage.setItem("loggedIn" , true)
    return redirect(`/${pathName}`)
  }
  catch(err){
    return err.message
  }
}

export default function LogIn(){ 
  const messageError = useActionData()
  const navigation = useNavigation()
  const status = navigation.state
  const message = useLoaderData()
 
  return(
        <>
            <div className="flex flex-col space-y-4 bg-primary rounded-lg p-8 text-center">
              <h1 className="text-3xl font-bold capitalize">sign in to your account</h1>
              {message && <h1 className="bg-white px-2 py-1 rounded-lg text-red-600 text-xl capitalize mx-auto" >{message}</h1>}
              {messageError && <h1 className="bg-white px-2 py-1 rounded-lg text-red-600 text-xl capitalize mx-auto" >{messageError}</h1>}
              <div className="justify-center">
                <Form method="post"  className="flex flex-col space-y-4" replace>  
                    <input 
                      type="email"
                      name="email" 
                      placeholder="email"
                      className="px-4 py-2 rounded-lg bg-white outline-0 border border-text-gray w-[400px] mx-auto"
                    />
                    <input 
                       type="password"
                       name="password" 
                       placeholder="password"
                       className="px-4 py-2 rounded-lg bg-white outline-0 border border-text-gray w-[400px] mx-auto"
                    />
                    <button disabled={status === "submitting"} className="bg-secondary text-white px-4 py-2 rounded-lg w-[400px] cursor-pointer text-xl font-semibold mx-auto">
                      {status === "submitting" ? "logging in..." : "login"}
                    </button>
                </Form>
              </div>
            </div>
        </>
  )
}