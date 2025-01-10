import express from "express";
import { editEnrollment, enrollStudent, fetchEnrollments, viewEnrollment } from "../controllers/enrollController.js";

const enrollRouter = express.Router();

enrollRouter.post("/enrollStudent", enrollStudent)
enrollRouter.get("/get", fetchEnrollments)
enrollRouter.post("/view", viewEnrollment)
enrollRouter.post("/edit", editEnrollment)

export default enrollRouter