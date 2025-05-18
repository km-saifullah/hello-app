import dotenv from "dotenv";

dotenv.config();

export const serverPort = process.env.PORT;
export const mongodbUri = process.env.MONGODB_URI;
