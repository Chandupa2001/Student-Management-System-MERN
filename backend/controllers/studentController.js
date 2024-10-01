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

export { addStudent }