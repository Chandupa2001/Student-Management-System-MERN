import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
    enrollmentId: {type: String, required: true},
    batchId: {type: String, required: true},
    studentId: {type: String, required: true},
    joinedDate: {type: String, required: true},
},{minimize: false});

const enrollModel = mongoose.models.enrollments || mongoose.model("enrollments", enrollSchema);

export default enrollModel;