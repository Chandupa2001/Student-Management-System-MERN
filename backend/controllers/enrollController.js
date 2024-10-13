import enrollModel from "../models/enrollModel.js";

const enrollStudent = async (req,res) => {
    const enroll = new enrollModel({
        enrollmentId: req.body.enrollmentId,
        batchId: req.body.batchId,
        studentName: req.body.studentName,
        joinedDate: req.body.joinedDate
    });

    try {
        enroll.save();
        res.json({success: true, message: "Student enrolled to the course."})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Error"})
    }
}

export { enrollStudent }