import { getRequest } from "@/actions/Requests";
import Request from "@/Components/Admin/Request"
import { auth } from "auth";
import { redirect } from "next/navigation";
import * as React from "react"


// Mock data for pending doctor requests


export default async function DoctorApprovalsPage({searchParams}) {
  const {status } = searchParams;
  const {requests} = await getRequest(status);
  console.log("search params");
  console.log(searchParams , "search Params");
  
  let isAdmin = await auth()
  if (!isAdmin && isAdmin?.user?.role != "admin") redirect("/");
  return (
    <Request status={status} requests={requests}/>
  )
}

