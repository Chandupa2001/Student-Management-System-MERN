import React, { useEffect, useState } from "react";
import "./EditBatch.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBatch() {
    const location = useLocation();
    const { batchId } = location.state;
    const navigate = useNavigate();

    const [data, setData] = useState({
        batchId: "",
        teacherName: "",
        instrument: "",
        venue: "",
    });
    const [teachers, setTeachers] = useState([]);
    const [availableInstruments, setAvailableInstruments] = useState([]);

    useEffect(() => {
        fetchBatch();
        getTeachers();
    }, [batchId]);

    useEffect(() => {
        if (data.teacherName) {
            const selectedTeacher = teachers.find(
                (teacher) => teacher.name === data.teacherName
            );
            if (selectedTeacher) {
                setAvailableInstruments([selectedTeacher.instrument]);
            }
        }
    }, [teachers, data.teacherName]);

    const fetchBatch = async () => {
        const url = "http://localhost:3000/api/batch/view";
        try {
            const response = await axios.post(url, { batchId });
            if (response.data.success) {
                const batchData = response.data.data[0];
                setData({
                    batchId: batchData.batchId,
                    teacherName: batchData.teacherName,
                    instrument: batchData.instrument,
                    venue: batchData.venue,
                });
            } else {
                console.error("Error fetching batch data");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getTeachers = async () => {
        const url = "http://localhost:3000/api/teacher/get";
        try {
            const response = await axios.get(url);
            if (response.data.success) {
                setTeachers(response.data.data);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateBatch = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/api/batch/edit";
        try {
            const response = await axios.post(url, data);
            if (response.data.success) {
                navigate("/dashboard/batches");
                alert("Batch updated successfully");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Error updating batch");
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));

        if (name === "teacherName") {
            const selectedTeacher = teachers.find(
                (teacher) => teacher.name === value
            );
            setAvailableInstruments(
                selectedTeacher ? [selectedTeacher.instrument] : []
            );
            setData((prevData) => ({ ...prevData, instrument: "" }));
        }
    };

    return (
        <div className="edit">
            <form onSubmit={updateBatch}>
                <div className="add-id">
                    <p>BatchId No</p>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        value={data.batchId}
                        name="batchId"
                        placeholder="Enter Batch Id No"
                        readOnly
                    />
                </div>
                <div className="add-name">
                    <p>Teacher Name</p>
                    <select
                        onChange={onChangeHandler}
                        value={data.teacherName}
                        name="teacherName"
                        placeholder="Select Teacher Name"
                    >
                        <option value="" disabled>
                            Select Teacher
                        </option>
                        {teachers.map((teacher, index) => (
                            <option key={index} value={teacher.name}>
                                {teacher.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="add-age-tel">
                    <div className="add-age">
                        <p>Instrument</p>
                        <select
                            onChange={onChangeHandler}
                            value={data.instrument}
                            name="instrument"
                            placeholder="Select Instrument"
                        >
                            <option value="" disabled>
                                Select Instrument
                            </option>
                            {availableInstruments.map((instrument, index) => (
                                <option key={index} value={instrument}>
                                    {instrument}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="add-tel">
                        <p>Venue</p>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            value={data.venue}
                            name="venue"
                            placeholder="Enter Venue"
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

export default EditBatch;
