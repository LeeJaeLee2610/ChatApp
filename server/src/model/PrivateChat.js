import mongoose, { mongo, Schema } from "mongoose";

const PrivateChat = new Schema(
  {
    chatId: [{ type: String }],
    message: [
      {
        uid: { type: String },
        mes: { type: String },
        createdAt: { type: new Date(Date.now()) },
        updatedAt: { type: new Date(Date.now()) },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("PrivateChat", PrivateChat);
