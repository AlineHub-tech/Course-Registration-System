import express from "express";
import { createCourse, getCourses } from "../controllers/courseController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, admin, createCourse);
router.get("/", protect, getCourses);

export default router;
