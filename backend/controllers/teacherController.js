import teacherModel from "../models/teacherModel.js";

const addTeacher = async (req,res) => {
    const teacher = new teacherModel({
        teacherId: req.body.teacherId,
        name: req.body.name,
        address: req.body.address,
        instrument: req.body.instrument,
        telephoneNo: req.body.telephoneNo
    });

    try {
        teacher.save();
        res.json({success: true, message: "Teacher Added."})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Error"})
    }
}

export { addTeacher }