import { getAllUsers } from '@/actions/getAllUsers';
import { auth } from 'auth';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Button } from '@/Components/ui/button';
export default async function AdminPanelPatients({ searchParams }) {

    const session = await auth();
    if (!session && session?.user?.role != "admin") redirect("/");
    const requests = await getAllUsers()
    console.log(requests , "all patients in patients page");
    
    return (
        <div>
            <h1 style={{
                color: "#207DFF",
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "20px"
            }}>Patients In the System</h1>

            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>Patient Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>First Name</TableHead>
                                <TableHead>Last Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Update Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests ? requests.map((doctor) => (
                                <TableRow key={doctor.id}>
                                    <TableCell className="font-medium">
                                        {doctor.firstName}
                                    </TableCell>
                                    <TableCell>{doctor.lastName}</TableCell>
                                    <TableCell>{doctor.email}</TableCell>
                                    <TableCell>{doctor.role.toUpperCase()}</TableCell>
                                    <TableCell><Button variant="primary" style={{
                                        backgroundColor: "#207DFF",
                                        color: "white",
                                        padding: "10px 20px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer"
                                    }}>Update To Admin</Button></TableCell>
                                </TableRow>
                            )

                            )
                                :
                                <h1>No Request To Show</h1>
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

