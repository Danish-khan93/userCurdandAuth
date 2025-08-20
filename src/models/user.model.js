import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      required: "true",
      type: String,
      unique: true,
      // lowercase: true,
      trim: true,
    },
    firstName: {
      required: "true",
      type: String,
      // lowercase: true,
      trim: true,
    },
    lastName: {
      required: "true",
      type: String,
      // lowercase: true,
      trim: true,
    },
    role: {
      required: true,
      type: String,
      // enum: ["superAdmin", "admin", "company", "department", "client"],
    },
    roleId: {
      required: true,
      type: Number,
      // enum: [1, 2, 3, 4, 5],
    },
    password: {
      required: "true",
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
