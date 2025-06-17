import { redirect } from "react-router-dom";

export async function auth(){
   const loged = true
   if(!loged){
       throw redirect("/login")
   }
}