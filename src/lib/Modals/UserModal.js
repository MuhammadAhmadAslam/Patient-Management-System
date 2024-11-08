import mongoose from "mongoose";

const { Schema } = mongoose;

let UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phoneNumber: String,
  gender: String,
  role: { type: String, default: "user", enum: ["user", "admin", "doctor"] },
});

export const userModal = mongoose.models.Users || mongoose.model("Users", UserSchema);
