import React, { useEffect, useState } from "react";
import "./Enroll.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Enroll() {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    enrollmentId: "",
    batchId: "",
    studentId: "",
    joinedDate: "",
  });
  const [batches, setBatches] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getBatches();
    getStudents();
  }, []);

  const getBatches = async () => {
    const url = "http://localhost:3000/api/batch/get";
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setBatches(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getStudents = async () => {
    const url = "http://localhost:3000/api/student/get";
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setStudents(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data)
    const url = "http://localhost:3000/api/enroll/enrollStudent";
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        navigate("/dashboard/enrollments");
        alert("Enrollment added successfully");
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
  };

  return (
    <div className="add">
      <h2 className="title">Enroll Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-id">
          <p>EnrollId No</p>
          <input
            type="text"
            name="enrollmentId"
            onChange={onChangeHandler}
            placeholder="Enter Enroll Id No"
          />
        </div>
        <div className="add-name">
          <p>Batch</p>
          <select
            name="batchId"
            onChange={onChangeHandler}
            value={data.batchId}
            placeholder="Select Teacher Name"
          >
            <option value="" disabled>
              Select Batch
            </option>
            {batches.map((batch, index) => (
              <option key={index} value={batch.batchId}>
                {batch.batchId}
              </option>
            ))}
          </select>
        </div>

        <div className="add-age-tel">
          <div className="add-age">
            <p>Student Id</p>
            <select
              name="studentId"
              onChange={onChangeHandler}
              value={data.studentId}
              placeholder="Select Student"
            >
              <option value="" disabled>
                Select Student
              </option>
              {students.map((student, index) => (
                <option key={index} value={student.studentId}>
                  {student.studentId}
                </option>
              ))}
            </select>
          </div>
          <div className="add-tel">
            <p>Date</p>
            <input type="date" name="joinedDate"
            onChange={onChangeHandler}
            placeholder="Enter Date" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Enroll
        </button>
      </form>
    </div>
  );
}

export default Enroll;
