import express from 'express'
import { addTeacher } from '../controllers/teacherController.js';

const teacherRouter = express.Router();

teacherRouter.post("/add", addTeacher)

export default teacherRouter