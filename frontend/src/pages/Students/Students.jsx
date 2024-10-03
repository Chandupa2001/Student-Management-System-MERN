import React, { useEffect, useState } from "react";
import "./Students.css";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Items() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const url = "http://localhost:3000/api/student/get";
    try {
      const response = await axios.get(url);
      console.log(response.data);

      if (response.data.success) {
        setStudents(response.data.data);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="table-container">
        <div className="title-container">
          <button onClick={() => navigate("/dashboard/add-student")}>
            Add Student
          </button>
          <h2>List of Students</h2>
        </div>
        <table className="items-table">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Telephone No</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.age}</td>
              <td>{student.telephoneNo}</td>
              <td>
                <button>
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

export default Items;
