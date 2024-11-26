"use server"

import { auth } from "auth"
import { revalidatePath } from "next/cache";

let session = await auth()

export async function handleApprove(doctor) {
        console.log(doctor , "doctor in approve action");
        let sendData = await fetch(`${process.env.BASE_URL}api/requests`, {
            method: "PUT",
            body: JSON.stringify({ _id: doctor._id , Status : "Approved"}),
        })
        let updateRole = await fetch(`${process.env.BASE_URL}api/users`, {
            method: "PUT",
            body: JSON.stringify({ _id: session.user._id , role : "doctor"}),
        })
        console.log(updateRole , "updateRole");
        
        revalidatePath("/admin/request")
}

export async function handleReject(doctor) {
    console.log(doctor , "doctor in reject action");
    let sendData = await fetch(`${process.env.BASE_URL}api/requests`, {
        method: "PUT",
        body: JSON.stringify({ _id: doctor.RequestedUserId , Status : "Rejected"}),
    })
    revalidatePath("/admin/request")
}