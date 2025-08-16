import { Schema, model } from "mongoose";

const roleCtSchema = new Schema(
  {
    roleType: {
      type: String,
      unique: true,
      
    },
    roleTypeId: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Role = model("Role", roleCtSchema);
