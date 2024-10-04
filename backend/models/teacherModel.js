import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    teacherId: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    instrument: {type: String, required: true},
    telephoneNo: {type: String, required: true},
},{minimize: false});

const teacherModel = mongoose.models.teacher || mongoose.model("teacher", teacherSchema);

export default teacherModel;