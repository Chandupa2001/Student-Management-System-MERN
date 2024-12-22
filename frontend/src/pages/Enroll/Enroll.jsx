import React, { useEffect, useState } from "react";
import "./Enroll.css";
import axios from "axios";

function Enroll() {
  const [data, setData] = useState({
    enrollmentId: "",
    batchId: "",
    studentName: "",
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

  return (
    <div className="add">
      <h2 className="title">Enroll Student</h2>
      <form>
        <div className="add-id">
          <p>EnrollId No</p>
          <input type="text" name="enrollId" placeholder="Enter Enroll Id No" />
        </div>
        <div className="add-name">
          <p>Batch</p>
          <select name="teacherName" placeholder="Select Teacher Name">
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
            <p>Student Name</p>
            <select name="instrument" placeholder="Select Student">
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
            <input type="date" name="date" placeholder="Enter Date" />
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
