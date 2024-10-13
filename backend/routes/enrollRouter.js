import express from "express";
import { enrollStudent } from "../controllers/enrollController.js";

const enrollRouter = express.Router();

enrollRouter.post("/enrollStudent", enrollStudent)

export default enrollRouter