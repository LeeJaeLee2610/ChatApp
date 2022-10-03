import mongoose, { Schema } from "mongoose";

const UserDetail = new Schema(
  {
    image: { type: String },
    fullname: { type: String },
    nickname: { type: String },
    dob: { type: Date },
    email: { type: String },
    phone: { type: String },
    uid: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("UserDetail", UserDetail);
