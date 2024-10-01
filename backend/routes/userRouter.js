import express from 'express'
import { getUser, loginUser, registerUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post("/signup" , registerUser);
userRouter.post("/signin" , loginUser);
userRouter.get("/get", authMiddleware, getUser)

export default userRouter;