import express from 'express'
import { addTeacher, fetchTeachers, viewTeacher } from '../controllers/teacherController.js';

const teacherRouter = express.Router();

teacherRouter.post("/add", addTeacher);
teacherRouter.get("/get", fetchTeachers);
teacherRouter.post("/view", viewTeacher);

export default teacherRouter