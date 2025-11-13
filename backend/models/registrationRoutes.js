import express from "express";
import { registerCourse, myCourses } from "../controllers/registrationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, registerCourse);
router.get("/mine", protect, myCourses);

export default router;
