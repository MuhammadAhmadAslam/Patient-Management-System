"use server"


export async function getDoctors() {
    let res = await fetch(`${process.env.BASE_URL}api/doctor`, {
        cache: "no-cache",
    })
    res = res.json()
    return res
}

export async function getSingleDoctor(id) {
    let res = await fetch(`${process.env.BASE_URL}api/doctor/${id}`, {
        cache: "no-cache",
    })
    res = res.json()
    return res
}