import mongoose from "mongoose";

const { Schema } = mongoose;

let RequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  gender: {
    Type: String,
    enum: ["male", "female", "other", "prefer-not-to-say"],
  },
  address: String,
  specialty: String,
  experience: String,
  license: String,
  appointmentStart: String,
  appointmentEnd: String,
  bio: String,
  availability: [{}],
});

export let RequestModal =
  mongoose.models.Requests || mongoose.model("Requests", RequestSchema);
