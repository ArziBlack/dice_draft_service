import mongoose from "mongoose";
import { MONGO_URI } from ".";
import { log } from "console";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    log("mongodb connected...");
  } catch (error) {
    log("mongodb connection error: ", error);
    process.exit(1);
  }
};
