import express from 'express'
import { addStudent, fetchStudents } from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post("/add", addStudent)
studentRouter.get("/get", fetchStudents)

export default studentRouter;