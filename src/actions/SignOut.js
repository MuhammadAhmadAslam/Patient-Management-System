"use server"

import { auth, signOut } from "auth";

export async function SignOutUser() {
       console.log("signout call agae ");
       await signOut();
}


export async function getSession() {
       let session;
       try {
              let fetchSession = await auth();
              console.log("Seession appeared" , fetchSession);
              
              return fetchSession;
       } catch (e) {
              console.log(e, "error agyaa");
       }
       console.log("session agayua", session);
}