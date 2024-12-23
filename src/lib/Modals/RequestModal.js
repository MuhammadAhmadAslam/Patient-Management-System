// import mongoose from "mongoose";

// const { Schema } = mongoose;

// let RequestSchema = new Schema({
//   firstName: {type : String , required: true},
//   email: String,
//   phone: {type : String , required: true},
//   gender: {
//     type: String,
//     enum: ["Male", "Female", "Other", "Prefer-Not-To-Say"],
//     required: true,
//   },
//   address: String,
//   RequestedUserId: {type: String , ref: "Users" , required: true},
//   speciality : String,
//   experience: String,
//   license: String,
//   appointmentStart: String,
//   appointmentEnd: String,
//   bio: {type: String},
//   Status: {type: String, enum: ["Pending", "Approved", "Rejected"]},
//   daysAvailable: [{}],
// },{
//   strictPopulate: false,
// });

// export let RequestModal =
//   mongoose.models.requests || mongoose.model("requests", RequestSchema);
import mongoose from "mongoose";

const { Schema } = mongoose;

let RequestSchema = new Schema({
  firstName: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "Prefer-Not-To-Say"],
    required: true,
  },
  address: String,
  RequestedUserId: { type: String, ref: "Users", required: true },
  speciality: String,
  experience: String,
  license: String,
  appointmentStart: String,
  appointmentEnd: String,
  bio: { type: String },
  Status: { type: String, enum: ["Pending", "Approved", "Rejected"] },
  daysAvailable: [{}],
}, {
  strictPopulate: false,
});

// Register model with the capitalized name "Requests"
export let RequestModal =
  mongoose.models.Requests || mongoose.model("Requests", RequestSchema);
