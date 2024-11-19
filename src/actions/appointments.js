"use server"
export async function PostAppointments(status , doctorId , sessionId){
       try{
              let obj = {
                tatus : status,
                request : doctorId,
                user : sessionId,
                timeStamp: new Date().toLocaleDateString()
              }
              console.log("this obj is ready for use" , obj);
              let response = await fetch(`${process.env.BASE_URL}api/appointments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
              });
              console.log(response , "response");
              return Response.json(response)
            }catch(e){
              console.log(e , "error agaya"); 
              return Response.json({error : true , msg: e})
            }
}