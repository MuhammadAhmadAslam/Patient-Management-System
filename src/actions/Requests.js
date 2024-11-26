"use server";

import { RequestModal } from "@/lib/Modals/RequestModal";
import { userModal } from "@/lib/Modals/UserModal";
import { auth } from "auth";

export async function handleRequestFromFrontEnd(request) {
  try {
    let session = await auth();
    request.Status = "Pending";
    request.RequestedUserId = session.user._id;
    console.log("Handling request from frontend", request);

    let checkUser = await RequestModal.findOne({
      email: session.user.email,
    });
    console.log(checkUser, "checkUser");
    
    if (!checkUser) {
      let sendData = await fetch(`${process.env.BASE_URL}api/requests`, {
        method: "POST",
        body: JSON.stringify(request),
      });
      console.log("Request sent successfully", request);
      console.log(sendData);
      return { success: true, message: "Request sent successfully" };
    } else {
      console.log("Your Request is already in Pending State");
      return {
        success: false,
        message: "Your Request is already in Pending State",
      };
    }
  } catch (error) {
    console.error("Error sending request", error);
    return {
      success: false,
      message: "An error occurred while sending the request.",
    };
  }
}



export async function getRequest(status){
  console.log(status , "status in get request");
  
  
  let request = await fetch(`${process.env.BASE_URL}api/requests?status=${status ? status : ""}`);
  request = await request.json();
  return request;
}



export async function getApprovedDoctors(){  
  let request = await fetch(`${process.env.BASE_URL}api/requests?status=Approved`);
  request = await request.json();
  return request;
}