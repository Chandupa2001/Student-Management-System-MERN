import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/signup" , registerUser);
userRouter.post("/signin" , loginUser);

export default userRouter;