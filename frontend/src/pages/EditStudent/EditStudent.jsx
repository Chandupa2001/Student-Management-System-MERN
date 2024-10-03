import React, { useEffect, useState } from "react";
import "./EditStudent.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
    const location = useLocation();
    const { studentId } = location.state;
    const navigate = useNavigate();

    const [data, setData] = useState({
        studentId: "",
        name: "",
        address: "",
        age: "",
        telephoneNo: "",
    });

    useEffect(() => {
        fetchStudent();
    }, [studentId]);

    const fetchStudent = async () => {
        const url = "http://localhost:3000/api/student/view";
        console.log("Id: ", studentId);

        try {
            const response = await axios.post(url, { studentId });

            console.log(response.data);

            if (response.data.success) {
                const studentData = response.data.data[0];
                setData({
                    studentId: studentData.studentId,
                    name: studentData.name,
                    address: studentData.address,
                    age: studentData.age,
                    telephoneNo: studentData.telephoneNo,
                });
                console.log(data);
            } else {
                console.error("Error fetching student data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateStudent = async (event) => {
        event.preventDefault()
        const url = "http://localhost:3000/api/student/edit";
        try {
            const response = await axios.post(url, data);
            if (response.data.success) {
                navigate('/dashboard/students')
                alert("Student updated")
            } else {
                alert(response.data.message);
            }
        } catch (error) { 
            alert("Error")
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    return (
        <div className="edit">
            <form onSubmit={updateStudent}>
                <div className="edit-id">
                    <p>StudentId No</p>
                    <input
                        type="text"
                        name="studentId"
                        onChange={onChangeHandler}
                        value={data.studentId}
                        placeholder="Enter StudentId No"
                        readOnly
                    />
                </div>
                <div className="edit-name">
                    <p>Student Name</p>
                    <input
                        type="text"
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                        placeholder="Enter Student Name"
                    />
                </div>
                <div className="edit-address">
                    <p>Student Address</p>
                    <input
                        type="text"
                        name="address"
                        onChange={onChangeHandler}
                        value={data.address}
                        placeholder="Enter Student Address"
                    />
                </div>
                <div className="edit-age-tel">
                    <div className="edit-age">
                        <p>Age</p>
                        <input
                            type="number"
                            name="age"
                            onChange={onChangeHandler}
                            value={data.age}
                            placeholder="Enter Age"
                        />
                    </div>
                    <div className="edit-tel">
                        <p>Telephone No</p>
                        <input
                            type="text"
                            name="telephoneNo"
                            onChange={onChangeHandler}
                            value={data.telephoneNo}
                            placeholder="Enter Telephone No"
                        />
                    </div>
                </div>
                <button type="submit" className="edit-btn">
                    Edit
                </button>
            </form>
        </div>
    );
}

export default EditStudent;
