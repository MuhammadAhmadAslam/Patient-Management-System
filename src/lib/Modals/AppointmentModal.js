// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const appointmentSchame = new Schema(
//   {
//     user: { type: mongoose.Types.ObjectId, ref: "Users" },
//     request: { type: mongoose.Types.ObjectId, ref: "Requests" },
//     date: Date,
//     status: {
//       type: String,
//       default: "Pending",
//       enum: [
//         "Pending",
//         "Accepted",
//         "Cancelled",
//         "Visited",
//         "Reviewed",
//         "Missed",
//       ],
//     },
//     doctor: { type: mongoose.Types.ObjectId, ref: "Requests" },
//     notes: { type: String },
//     prescription: { type: String },
//     prescriptionDate: Date,
//     prescriptionStatus: { type: String, enum: ["Pending", "Delivered", "Refunded"] },
//     appointmentDate: Date,
//     appointmentTime: String,
//     prescriptionImage: { type: String },
//     prescriptionDocument: { type: String },
//   },
//   {
//     timestamps: true,
//     strictPopulate: false,
//   }
// );

// export const AppointmentModal =
//   mongoose.models.Appointments ||
//   mongoose.model("Appointments", appointmentSchame);


import mongoose from "mongoose";

const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    request: { type: mongoose.Types.ObjectId, ref: "requests" },
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
    doctor: { type: mongoose.Types.ObjectId, ref: "Requests" },  // Corrected reference to "Doctors"
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
    strictPopulate: false,
  }
);

// Register the model for "Appointments"
export const AppointmentModal =
  mongoose.models.Appointments || mongoose.model("Appointments", appointmentSchema);
