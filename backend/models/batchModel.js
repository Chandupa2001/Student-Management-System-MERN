import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batchId: {type: String, required: true},
    teacherName: {type: String, required: true},
    instrument: {type: String, required: true},
    venue: {type: String, required: true},
},{minimize: false});

const batchModel = mongoose.models.batch || mongoose.model("batch", batchSchema);

export default batchModel;