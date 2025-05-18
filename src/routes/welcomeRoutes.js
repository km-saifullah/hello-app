import express from "express";
import { updateWelcomeMessage } from "../controllers/welcomeController.js";

const router = express.Router();

router.get("/welcome", updateWelcomeMessage);

export default router;
