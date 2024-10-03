import express from 'express'
import { addStudent, editStudent, fetchStudents, viewStudent } from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post("/add", addStudent)
studentRouter.get("/get", fetchStudents)
studentRouter.post("/view", viewStudent)
studentRouter.post("/edit", editStudent)

export default studentRouter;