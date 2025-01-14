import React, { useEffect, useState } from "react";
import "./Enrollments.css";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Enrollments() {

  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([])

  useEffect(() => {
    fetchEnrollments();
  }, [])
  
  const fetchEnrollments = async () => {
    const url = "http://localhost:3000/api/enroll/get"
    try {
        const response = await axios.get(url);
        if (response.data.success) {
            setEnrollments(response.data.data);
        } else {
            console.log(response.data.message);
        }
    } catch (error) {
        console.error(error);
    }
  }

  const onEditPress = (id) => {
    navigate("/dashboard/editEnrollment", { state: { enrollmentId: id } });
  };

  return (
    <div>
      <div className="table-container">
        <div className="title-container">
        <button onClick={() => navigate('/dashboard/enroll')}>
            Enroll Student
          </button>
          <h2>List of Enrollments</h2>
        </div>
        <table className="items-table">
          <thead>
            <tr>
              <th>Enrollment Id</th>
              <th>Batch Id</th>
              <th>Student Id</th>
              <th>Joined Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
            <tr key={enrollment.id}>
              <td>{enrollment.enrollmentId}</td>
              <td>{enrollment.batchId}</td>
              <td>{enrollment.studentId}</td>
              <td>{enrollment.joinedDate}</td>
              <td>
                <button onClick={() => onEditPress(enrollment.enrollmentId)}>
                  <FaRegEdit color="#6E726E" size={20} />
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enrollments;
