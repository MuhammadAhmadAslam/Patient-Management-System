import mongoose from "mongoose";

const { Schema } = mongoose;

const appointmentSchame = new Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    request: { type: mongoose.Types.ObjectId, ref: "Requests" },
    date: Date,
    status: {
      type: String,
      default: "Pending",
      enum: [
        "Pending",
        "Accepted",
        "Cancelled",
        "Visited",
        "Reviewed",
        "Missed",
      ],
    },
    doctor: { type: mongoose.Types.ObjectId, ref: "Doctors" },
    notes: { type: String },
    prescription: { type: String },
    prescriptionDate: Date,
    prescriptionStatus: { type: String, enum: ["Pending", "Delivered", "Refunded"] },
    appointmentDate: Date,
    appointmentTime: String,
    prescriptionImage: { type: String },
    prescriptionDocument: { type: String },
  },
  {
    timestamps: true,
  }
);

export const AppointmentModal =
  mongoose.models.Appointments ||
  mongoose.model("Appointments", appointmentSchame);