import { redirect } from "react-router-dom";

export async function auth(request){
   const pathName = new URL(request.url).pathname 
   const loged = localStorage.getItem("loggedIn")
   if(!loged){
       throw redirect(`/login?message=You must login.&redirectTo=${pathName}`)
   }
}