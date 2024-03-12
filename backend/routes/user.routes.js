import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js"; // Import getUsersForSidebar as a named export

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar); // Use getUsersForSidebar directly

export default router;

