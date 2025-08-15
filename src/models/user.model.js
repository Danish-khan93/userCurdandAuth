import { Schema,model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      required: "true",
      type: String,
      unique: true,
    },
    password: {
      required: "true",
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
