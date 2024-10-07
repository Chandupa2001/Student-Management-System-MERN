import React, { useEffect, useState } from "react";
import "./EditTeacher.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTeacher() {
    const location = useLocation();
    const { teacherId } = location.state;
    const navigate = useNavigate();

    const [data, setData] = useState({
        teacherId: "",
        name: "",
        address: "",
        instrument: "",
        telephoneNo: "",
    });

    useEffect(() => {
        fetachTeacher();
    }, [teacherId]);

    const fetachTeacher = async () => {
        const url = "http://localhost:3000/api/teacher/view";
        console.log("Id: ", teacherId);

        try {
            const response = await axios.post(url, { teacherId });

            console.log(response.data);

            if (response.data.success) {
                const teacherData = response.data.data[0];
                setData({
                    teacherId: teacherData.teacherId,
                    name: teacherData.name,
                    address: teacherData.address,
                    instrument: teacherData.instrument,
                    telephoneNo: teacherData.telephoneNo,
                });
                console.log(data);
            } else {
                console.error("Error fetching teacher data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateTeacher = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/api/teacher/edit";
        try {
            const response = await axios.post(url, data);
            if (response.data.success) {
                navigate("/dashboard/teachers");
                alert("Teacher updated");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Error");
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    return (
        <div className="edit">
            <form onSubmit={updateTeacher}>
                <div className="add-id">
                    <p>TeacherId No</p>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={data.teacherId}
                        name="teacherId"
                        placeholder="Enter Teacher Id No"
                    />
                </div>
                <div className="add-name">
                    <p>Teacher Name</p>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={data.name}
                        name="name"
                        placeholder="Enter Teacher Name"
                    />
                </div>
                <div className="add-address">
                    <p>Teacher Address</p>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={data.address}
                        name="address"
                        placeholder="Enter Teacher Address"
                    />
                </div>
                <div className="add-age-tel">
                    <div className="add-age">
                        <p>Instrument</p>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            value={data.instrument}
                            name="instrument"
                            placeholder="Enter Teaching Instrument"
                        />
                    </div>
                    <div className="add-tel">
                        <p>Telephone No</p>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            value={data.telephoneNo}
                            name="telephoneNo"
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

export default EditTeacher;
