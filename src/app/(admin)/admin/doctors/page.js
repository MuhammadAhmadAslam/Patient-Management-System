import { redirect } from "next/navigation";
import Request from "@/Components/Admin/Request";
import { getApprovedDoctors, getRequest } from "@/actions/Requests";
import { auth } from "auth";
export default async function DocorsAdmin({ searchParams }) {
  console.log("searchParams=>", searchParams);
  const { status } = searchParams;
  const session = await auth();
  if (!session && session?.user?.role != "admin") redirect("/");
  const { requests } = await getApprovedDoctors(status);
  // console.log("requests=>", requests);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">All {`Doctor's`} In the System</h1>

      <Request status={status} requests={requests} isDoctor={true} />
    </div>
  );
}
