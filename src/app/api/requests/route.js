import connectDB from "@/lib/DataBase/connectDB";
import { RequestModal } from "@/lib/Modals/RequestModal";

export async function GET(req) {
  await connectDB();
  // console.log(req);
  const query = {};
  const status = req?.nextUrl?.searchParams?.get("status");
  if (status && status != "All") {
    query.Status = status;
  }

  console.log(query, "query in backend");
  console.log(status, "status in backend");
  
  
  const requests = await RequestModal.find(query);


  return Response.json(
    {
      error: false,
      msg: "Requests fetched Successfully",
      requests,
    },
    { status: 200 }
  );
}
export async function POST(req) {
  await connectDB();
  try {
    let Request = await req.json();
    let newRequest = await new RequestModal({ ...Request });
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



export async function PUT(req) {
  await connectDB();
  try {
    let Request = await req.json();
    let newRequest = await RequestModal.findOneAndUpdate({ _id: Request._id }, { Status: Request.Status });
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
