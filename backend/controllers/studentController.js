import studentModel from "../models/studentModel.js"

// add student
const addStudent = async (req,res) => {
    
    const student = new studentModel({
        studentId: req.body.studentId,
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        telephoneNo: req.body.telephoneNo
    })

    try {
        await student.save();
        res.json({success: true, message: "Student added."});
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Error"});
    }
}

const fetchStudents = async (req,res) => {
    try {
        const students = await studentModel.find({});
        res.json({success: true, data: students})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: "Errorr"})
    }
}

const viewStudent = async (req, res) => {
    const { studentId } = req.body;
    
    try {
        const student = await studentModel.find({ studentId });
        
        if (student.length > 0) {
            res.json({ success: true, data: student });
        } else {
            res.json({ success: false, message: "No student found with this ID" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching student data" });
    }
};

const editStudent = async (req,res) => {
    try {
        await studentModel.findOneAndUpdate({studentId: req.body.studentId}, {name: req.body.name, address: req.body.address, age: req.body.age, telephoneNo: req.body.telephoneNo})
        res.json({ success: true, message: "Student updated"})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error"});
    }
}


export { addStudent, fetchStudents, viewStudent, editStudent }