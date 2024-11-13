"use client"

import * as React from "react"
import { Eye, X } from 'lucide-react'
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"
import { ScrollArea } from "@/Components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"

// Mock data for pending doctor requests
const pendingDoctors = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiology",
    submittedDate: "2024-03-15",
    image: "/placeholder.svg?height=100&width=100",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Dr, Healthville, HV 12345",
    education: "MD from Harvard Medical School",
    experience: "10 years in Cardiology",
    certifications: ["American Board of Internal Medicine", "Cardiovascular Disease Certification"],
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Neurology",
    submittedDate: "2024-03-14",
    image: "/placeholder.svg?height=100&width=100",
    email: "john.doe@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Neuroscience Ave, Braintown, BT 67890",
    education: "MD from Johns Hopkins University School of Medicine",
    experience: "8 years in Neurology",
    certifications: ["American Board of Psychiatry and Neurology"],
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Pediatrics",
    submittedDate: "2024-03-13",
    image: "/placeholder.svg?height=100&width=100",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 246-8135",
    address: "789 Children's Health Blvd, Kidsville, KV 13579",
    education: "MD from Stanford University School of Medicine",
    experience: "6 years in Pediatrics",
    certifications: ["American Board of Pediatrics"],
  },
]

export default function DoctorApprovalsPage() {
  const [selectedDoctor, setSelectedDoctor] = React.useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pending Doctor Requests</h1>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {pendingDoctors.length}
        </Badge>
      </div>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Doctor Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{doctor.name}</TableCell>
                  <TableCell>{doctor.specialty}</TableCell>
                  <TableCell>{doctor.submittedDate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-[#FAA0A0] text-white">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => setSelectedDoctor(doctor)}
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Doctor Request Details</DialogTitle>
                          <DialogDescription>
                            Review and approve or reject the doctor&apos;s application.
                          </DialogDescription>
                        </DialogHeader>
                        {selectedDoctor && (
                          <DoctorDetailSheet doctor={selectedDoctor} />
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function DoctorDetailSheet({ doctor }) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={doctor.image} alt={doctor.name} />
          <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-gray-500">{doctor.specialty}</p>
        </div>
        <Badge variant="secondary" className="ml-auto bg-[#FAA0A0] text-white">
          Pending
        </Badge>
      </div>
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="grid gap-4">
          <section>
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{doctor.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>{doctor.phone}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p>{doctor.address}</p>
              </div>
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Professional Details</h3>
            <div className="grid gap-2">
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p>{doctor.education}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p>{doctor.experience}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Certifications</p>
                <ul className="list-disc list-inside">
                  {doctor.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Application Notes</h3>
            <p className="text-sm text-gray-600">
              No additional notes provided by the applicant.
            </p>
          </section>
        </div>
      </ScrollArea>
      <DialogFooter className="sm:justify-between">
        <Button variant="outline" className="w-full sm:w-auto">
          Request More Information
        </Button>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Button variant="destructive" className="w-full sm:w-auto bg-[#FAA0A0] hover:bg-[#E08080]">
            Reject
          </Button>
          <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
            Approve
          </Button>
        </div>
      </DialogFooter>
    </div>
  )
}