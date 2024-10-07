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

const fetchTeachers = async (req,res) => {
    try {
        const teacher = await teacherModel.find({});
        res.json({success: true, data: teacher});
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Error"})
    }
}

const viewTeacher = async (req, res) => {
    const { teacherId } = req.body;
    
    try {
        const teacher = await teacherModel.find({ teacherId });
        
        if (teacher.length > 0) {
            res.json({ success: true, data: teacher });
        } else {
            res.json({ success: false, message: "No teacher found with this ID" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching teacher data" });
    }
}

const editTeacher = async (req,res) => {
    try {
        await teacherModel.findOneAndUpdate({teacherId: req.body.teacherId}, {name: req.body.name, address: req.body.address, instrument: req.body.instrument, telephoneNo: req.body.telephoneNo})
        res.json({ success: true, message: "Teacher updated"})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error"});
    }
}

export { addTeacher, fetchTeachers, viewTeacher, editTeacher }