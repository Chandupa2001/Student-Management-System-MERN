import express from "express";
import { addBatch, fetchBatches } from "../controllers/batchController.js";

const batchRouter = express.Router();

batchRouter.post("/add", addBatch);
batchRouter.get("/get", fetchBatches);

export default batchRouter