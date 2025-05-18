import express from "express";
import cors from "cors";
import welcomeRouter from "./routes/welcomeRoutes.js";

const app = express();

// required middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: "*" }));

// routes
app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: true, message: "welcome to the testing api" });
});

app.use("/api/v1/", welcomeRouter);

export default app;
