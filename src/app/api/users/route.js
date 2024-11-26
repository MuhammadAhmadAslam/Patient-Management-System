import connectDB from "@/lib/DataBase/connectDB";
import { userModal } from "@/lib/Modals/UserModal";

export async function GET(req) {
  await connectDB();
  const query = {};
  const role = req?.nextUrl?.searchParams?.get("role");
  if (role && role != "All") {
    query.role = role;
  }
  let users = await userModal.find(query);
  return Response.json(users);
}


export async function POST(req) {
  await connectDB();
  try {
    let userObject = await req.json();
    let newUser = await new userModal({ ...userObject });
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



export async function PUT(req) {
  await connectDB();
  try {
    let Request = await req.json();
    let newRequest = await userModal.findOneAndUpdate({ _id: Request._id }, { role: Request.role });
    newRequest = await newRequest.save();
    return Response.json(newRequest);
  } catch (e) {
    console.error("Error in PUT request:", e);
    return Response.json(
      {
        error: true,
        message: "Error in PUT request",
        errorDetails: e.message,
      },
      { status: 500 }
    );
  }
}