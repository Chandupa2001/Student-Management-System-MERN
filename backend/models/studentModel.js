import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    age: {type: Number, required: true},
    telephoneNo: {type: String, required: true},
},{minimize: false})

const studentModel = mongoose.models.student || mongoose.model("student", studentSchema)

export default studentModel;