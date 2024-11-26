import express from "express";
import { enrollStudent, fetchEnrollments, viewEnrollment } from "../controllers/enrollController.js";

const enrollRouter = express.Router();

enrollRouter.post("/enrollStudent", enrollStudent)
enrollRouter.get("/get", fetchEnrollments)
studentRouter.post("/view", viewEnrollment)

export default enrollRouter