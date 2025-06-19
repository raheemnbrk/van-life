export async function getVans(id) {
    const url = id ? `http://localhost:3000/vans/${id}` : "http://localhost:3000/vans"
    const res = await fetch(url)

    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }

    const data = await res.json()

    return data
} 


export async function getHostVans(id){
    const url = id ? `http://localhost:3000/vans/${id}`:`http://localhost:3000/vans?hostId=123` 
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    } 

    const data = await res.json()
    return data
}

export async function getUser(email, password ){
  const url = `http://localhost:3000/users?email=${email}`
  const res = await fetch(url)
  const data = await res.json()

  if(data.length === 0){
    throw {
      message: "Invalid email or password",
      statusText: "Unauthorized",
      status: 401
    }
  }

  const user = data[0]

  if(user.password !== password){
    throw new Error("incorrect password.")
  }

  return user
}