"use server";

import { AppointmentModal } from "@/lib/Modals/AppointmentModal";

export async function PostAppointments(status, doctorId, sessionId, selectedDate) {
  try {
    // Check if the appointment already exists
    const checking = await AppointmentModal.findOne({
      request: doctorId,
      user: sessionId,
      appointmentDate: selectedDate,
    });

    if (checking) {
      return {
        error: true,
        msg: "You have already made an appointment for this date.",
      };
    }

    // Prepare the new appointment object
    const obj = {
      status,
      request: doctorId,
      appointmentDate: selectedDate,
      user: sessionId,
      time: new Date().toLocaleDateString(),
    };

    console.log("Prepared appointment object:", obj);

    // Simulate saving or sending the data to an API
    const response = await fetch(`${process.env.BASE_URL}api/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.msg || "Failed to book appointment.");
    }

    return { error: false, msg: "Appointment booked successfully!", data: result };
  } catch (e) {
    console.error("Error in PostAppointments:", e);
    return {
      error: true,
      msg: e.message || "An unexpected error occurred. Please try again later.",
    };
  }
}

