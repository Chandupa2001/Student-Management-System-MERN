import React, { useEffect, useState } from "react";
import "./AddBatch.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBatch() {
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
    getTeachers();
  }, []);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/api/batch/add";
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        navigate("/dashboard/batches");
        alert("Batch added successfully!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "teacherName") {
      const selectedTeacher = teachers.find((teacher) => teacher.name === value);
      setAvailableInstruments(selectedTeacher ? [selectedTeacher.instrument] : []);
    }
  };

  return (
    <div className="add">
      <h2 className="title">Add New Batch</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-id">
          <p>BatchId No</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.batchId}
            name="batchId"
            placeholder="Enter Batch Id No"
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
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddBatch;
