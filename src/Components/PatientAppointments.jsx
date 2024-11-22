"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Check, XCircle, Eye } from "lucide-react"; // Icons for admin actions
import { AdminAppointmentHandling } from "@/actions/appointmentHandling";

const PatientAppointments = ({ appointments, isAdmin }) => {
  return (
    <div className="flex-1 space-y-6">
      {appointments.length > 0 ? appointments.map((appointment) => (
        <Card key={appointment._id} className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-black">
              DR. {appointment.request.firstName}
            </CardTitle>
            <CardDescription>{appointment.request.speciality}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>{appointment.appointmentDate.toDateString()}</span>
              <Clock className="h-4 w-4 ml-4" />
              <span>{appointment.request.appointmentStart}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>My Clinic</span>
            </div>
            {isAdmin && (
              <div className="mt-4 p-2 bg-gray-100 rounded-md">
                <p className="text-sm font-medium text-gray-800">
                  Patient Details:
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Name:</span>{" "}
                  {appointment.user.firstName} {appointment.user.lastName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Email:</span>{" "}
                  {appointment.user.email}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Phone:</span>{" "}
                  {appointment.user.phone || "N/A"}
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span
              className={`text-sm font-semibold ${
                appointment.status === "Upcoming"
                  ? "text-[#207DFF]"
                  : "text-[#F87171]"
              }`}
            >
              {appointment.status}
            </span>
            <div className="flex justify-center items-center gap-5">
              {isAdmin ? (
                // Admin view: Icons instead of buttons
                <>
                  {appointment.status === "Pending" && (
                    <Check
                      className="h-5 w-5 text-green-500 cursor-pointer"
                      title="Accept"
                      onClick={() =>
                        AdminAppointmentHandling(appointment._id, "Accepted")
                      }
                    />
                  )}
                  <XCircle
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    title="Cancel"
                    onClick={() =>
                      AdminAppointmentHandling(appointment._id, "Cancelled")
                    }
                  />
                  <Eye
                    className="h-5 w-5 text-blue-500 cursor-pointer"
                    title="View Details"
                    onClick={() =>
                      AdminAppointmentHandling(appointment._id, "Visited")
                    }
                  />
                </>
              ) : (
                // Regular user view: Buttons
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={appointment.status !== "Pending"}
                  >
                    Reschedule
                  </Button>
                  {appointment.status === "Pending" && (
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  )}
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      )) 
    : (
      <div className="flex justify-center items-center h-[40vh]">
          <h1 className="text-2xl font-bold text-red">No Appointments Yet</h1>
      </div>
    )
    }
    </div>
  );
};

export default PatientAppointments;
