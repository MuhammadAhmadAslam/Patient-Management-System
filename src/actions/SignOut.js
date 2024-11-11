"use server"

import { signOut } from "auth";

export async function SignOutUser() {
       console.log("signout call agae ");
       await signOut();
}