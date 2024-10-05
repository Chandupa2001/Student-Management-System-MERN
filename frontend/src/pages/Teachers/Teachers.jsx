import React, { useEffect, useState } from "react";
import "./Teachers.css";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Teachers() {

  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, [])
  

  const onEditPress = () => {
    navigate("/dashboard/editTeacher");
  };

  const fetchTeachers = async () => {
    const url = "http://localhost:3000/api/teacher/get"
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
  }

  return (
    <div>
      <div className="table-container">
        <div className="title-container">
          <button onClick={() => navigate("/dashboard/add-teacher")}>
            Add Teacher
          </button>
          <h2>List of Teachers</h2>
        </div>
        <table className="items-table">
          <thead>
            <tr>
              <th>Teacher Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Instrument</th>
              <th>Telephone No</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.teacherId}</td>
              <td>{teacher.name}</td>
              <td>{teacher.address}</td>
              <td>{teacher.instrument}</td>
              <td>{teacher.telephoneNo}</td>
              <td>
                <button onClick={onEditPress}>
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

export default Teachers;
