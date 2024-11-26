"use server"
export async function getAllUsers() {
    let res = await fetch(`${process.env.BASE_URL}api/users?role=user`, {
        cache: "no-cache",
    })
    res = await res.json()
    console.log(res , "response of user patient comes");
    
    return res
}