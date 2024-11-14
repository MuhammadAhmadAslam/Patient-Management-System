import Request from "@/Components/Admin/Request"
import { auth } from "auth";
import { redirect } from "next/navigation";
import * as React from "react"


// Mock data for pending doctor requests


export default async function DoctorApprovalsPage({searchParams}) {

  let fetchingData = await fetch(`${process.env.BASE_URL}/api/requests`);

  let data = await fetchingData.json();


  console.log("search params");
  console.log(searchParams , "search Params");
  
  let isAdmin = await auth()
  if (!isAdmin && isAdmin?.user?.role != "admin") redirect("/");
  return (
    <Request pendingDoctors={data}/>
  )
}

