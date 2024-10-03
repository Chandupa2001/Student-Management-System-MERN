import React, { useEffect, useState } from "react";
import "./AddStudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    studentId: "",
    name: "",
    address: "",
    age: Number,
    telephoneNo: "",
  });

  const handleSubmit = async (req, res) => {
    event.preventDefault();
    const url = `http://localhost:3000/api/student/add`;
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        navigate('/dashboard/students')
        alert("Student added successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add">
      <h2 className="title">Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-id">
          <p>StudentId No</p>
          <input
            type="text"
            name="studentId"
            onChange={onChangeHandler}
            value={data.id}
            placeholder="Enter StudentId No"
          />
        </div>
        <div className="add-name">
          <p>Student Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Enter Student Name"
          />
        </div>
        <div className="add-address">
          <p>Student Address</p>
          <input
            type="text"
            name="address"
            onChange={onChangeHandler}
            value={data.address}
            placeholder="Enter Student Address"
          />
        </div>
        <div className="add-age-tel">
          <div className="add-age">
            <p>Age</p>
            <input
              type="number"
              name="age"
              onChange={onChangeHandler}
              value={data.age}
              placeholder="Enter Age"
            />
          </div>
          <div className="add-tel">
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
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
