import mongoose from "mongoose";
import { mongodbUri } from "../config/config.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
  }
};
