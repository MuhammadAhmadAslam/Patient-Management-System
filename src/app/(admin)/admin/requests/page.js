// import { getRequest } from "@/actions/Requests";
// import Request from "@/Components/Admin/Request"
// import { auth } from "auth";
// import { redirect } from "next/navigation";
// import * as React from "react"


// // Mock data for pending doctor requests


// export default async function DoctorApprovalsPage({searchParams}) {
//   const {status } = searchParams;
  
//   const requests = await getRequest(status);
//   console.log(requests , "requests agyae page.js mae");
  
//   console.log("search params");
//   console.log(searchParams , "search Params in page.js mae");
  
//   let isAdmin = await auth()
//   if (!isAdmin && isAdmin?.user?.role != "admin") redirect("/");
//   return (
//     <Request status={status} requests={requests}/>
//   )
// }

import { redirect } from "next/navigation";
import Request from "@/Components/Admin/Request";
import { getRequest } from "@/actions/Requests";
import { auth } from "auth";
export default async function Requests({ searchParams }) {
  console.log("searchParams=>", searchParams);
  const { status } = searchParams;
  const session = await auth();
  if (!session && session?.user?.role != "admin") redirect("/");
  const { requests } = await getRequest(status);
  // console.log("requests=>", requests);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">{`Doctor's`} Requests</h1>

      <Request status={status} requests={requests} />
    </div>
  );
}
