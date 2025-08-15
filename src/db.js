import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const dbConnect = () => {
  (async () => {
    try {
      await mongoose.connect(process.env.DBCONNECTION);

      console.log("the db is connected successfully");
    } catch (error) {
      console.log(error, "monogo db is not connected");
      throw new Error("MongoDb is not connected");
    }
  })();
};
