import mongoose from "mongoose";

const { Schema } = mongoose;

let UserSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "email": {type: String , unique: true},
  "address": String,
  "phoneNumber": {type: String , unqiue: true},
  "gender": String,
  role: { type: String, default: "user", enum: ["user", "admin", "doctor"] },
  aappointments: [
    {
      date: Date,
      time: String,
      doctor: { type: Schema.Types.ObjectId, ref: "Doctors" }, // Assuming you have a Doctor model
      status: { type: String, enum: ["scheduled", "completed", "canceled"], default: "scheduled" }
    }
  ]
});

export const userModal = mongoose.models.Users || mongoose.model("Users", UserSchema);