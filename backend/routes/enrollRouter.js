import express from "express";
import { enrollStudent, fetchEnrollments } from "../controllers/enrollController.js";

const enrollRouter = express.Router();

enrollRouter.post("/enrollStudent", enrollStudent)
enrollRouter.get("/get", fetchEnrollments)

export default enrollRouter