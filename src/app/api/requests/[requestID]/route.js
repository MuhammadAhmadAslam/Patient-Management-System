import connectDB from "@/lib/DataBase/connectDB";
import { RequestModal } from "@/lib/Modals/RequestModal";

export async function GET(req , {params}) {
    await connectDB();
    let request = await RequestModal.findOne({ _id: params.requestID });
    console.log(request , "signle doctor request");
    
    return Response.json(request);
}