import express from "express";
import { addBatch, editBatch, fetchBatches, viewBatch } from "../controllers/batchController.js";

const batchRouter = express.Router();

batchRouter.post("/add", addBatch);
batchRouter.get("/get", fetchBatches);
batchRouter.post("/view", viewBatch);
batchRouter.post("/edit", editBatch);

export default batchRouter