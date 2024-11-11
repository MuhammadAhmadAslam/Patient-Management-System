import connectDB from "@/lib/DataBase/connectDB";
import { RequestModal } from "@/lib/Modals/RequestModal";

export async function GET() {
  await connectDB();
  let requests = await RequestModal.find();
  return Response.json(requests);
}

export async function POST(req) {
  await connectDB();
  try {
    let Request = await req.json();
    let newRequest = await new RequestModal({ ...Request});
    newRequest = await newRequest.save();
    return Response.json(newRequest);
  } catch (e) {
    console.error("Error in POST request:", e);
    return Response.json(
      {
        error: true,
        message: "Error in POST request",
        errorDetails: e.message,
      },
      { status: 500 }
    );
  }
}
