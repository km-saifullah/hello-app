import app from "./src/app.js";
import { serverPort } from "./src/config/config.js";
import { connectDb } from "./src/db/connectDb.js";

// connect db
connectDb();

app.listen(serverPort, () => console.log("server is running"));
