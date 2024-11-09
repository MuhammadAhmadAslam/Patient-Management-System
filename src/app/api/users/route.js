import connectDB from "@/lib/DataBase/connectDB";
import { userModal } from "@/lib/Modals/UserModal";

export async function GET(req) {
  await connectDB();
  let users = await userModal.find();
  return Response.json(users);
}

export async function POST(req) {
  await connectDB();
  try {
    let userObject = await req.json();
    let newUser = await new userModal({ ...userObject });
    console.log(newUser, "new user in post request");

    newUser = await newUser.save();
    return Response.json(newUser);
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json(
      {
        error: true,
        message: "Error in POST request",
        errorDetails: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
