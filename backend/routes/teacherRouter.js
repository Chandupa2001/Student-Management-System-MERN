import express from 'express'
import { addTeacher, editTeacher, fetchTeachers, viewTeacher } from '../controllers/teacherController.js';

const teacherRouter = express.Router();

teacherRouter.post("/add", addTeacher);
teacherRouter.get("/get", fetchTeachers);
teacherRouter.post("/view", viewTeacher);
teacherRouter.post("/edit", editTeacher);

export default teacherRouter