import React, { useEffect, useState } from "react";
import "./AddTeacher.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTeacher() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    teacherId: "",
    name: "",
    address: "",
    instrument: "",
    telephoneNo: ""
  })

  const handleSubmit = async () => {
    event.preventDefault();
    const url = "http://localhost:3000/api/teacher/add";
    try {
        const response = await axios.post(url,data);
        if (response.data.success) {
            navigate('/dashboard/teachers');
            alert("Teacher added successfully");
        } else {
            alert(response.data.message)
        }
    } catch (error) {
        console.error(error);
    }
  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add">
      <h2 className="title">Add New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-id">
          <p>StudentId No</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.teacherId}
            name="teacherId"
            placeholder="Enter Teacher Id No"
          />
        </div>
        <div className="add-name">
          <p>Student Name</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            placeholder="Enter Teacher Name"
          />
        </div>
        <div className="add-address">
          <p>Student Address</p>
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
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;
