import mongoose, { Schema } from "mongoose";

const welcomeSchema = new Schema(
  {
    text: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Welcome = mongoose.model("Welcome", welcomeSchema);

export default Welcome;
