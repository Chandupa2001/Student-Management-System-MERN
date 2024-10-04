import express from 'express'
import { addTeacher, fetchTeachers } from '../controllers/teacherController.js';

const teacherRouter = express.Router();

teacherRouter.post("/add", addTeacher);
teacherRouter.get("/get", fetchTeachers);

export default teacherRouter