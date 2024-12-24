import enrollModel from "../models/enrollModel.js";

const enrollStudent = async (req,res) => {
    const enroll = new enrollModel({
        enrollmentId: req.body.enrollmentId,
        batchId: req.body.batchId,
        studentId: req.body.studentId,
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

const fetchEnrollments = async (req,res) => {
    try {
        const enrollments = await enrollModel.find({});
        res.json({success: true, data: enrollments})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Errorr"})
    }
}

const viewEnrollment = async (req, res) => {
    const { enrollmentId } = req.body;
    
    try {
        const enrollment = await enrollModel.find({ enrollmentId });
        
        if (enrollment.length > 0) {
            res.json({ success: true, data: enrollment });
        } else {
            res.json({ success: false, message: "No enrollment found with this ID" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching enrollment data" });
    }
};


export { enrollStudent, fetchEnrollments, viewEnrollment }