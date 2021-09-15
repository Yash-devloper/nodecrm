import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    address: { type: String, required: true },
    mobileNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    familyInformation: { type: String, required: true },
    documentInsurance: { type: String, required: true },
    healthInsurance: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("Client", clientSchema);
export default User;
