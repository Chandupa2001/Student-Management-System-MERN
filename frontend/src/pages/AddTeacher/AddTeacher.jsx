import React, { useEffect, useState } from "react";
import "./AddTeacher.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTeacher() {

  const navigate = useNavigate();

  return (
    <div className="add">
      <h2 className="title">Add New Teacher</h2>
      <form>
        <div className="add-id">
          <p>StudentId No</p>
          <input
            type="text"
            name="teacherId"
            placeholder="Enter Teacher Id No"
          />
        </div>
        <div className="add-name">
          <p>Student Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter Teacher Name"
          />
        </div>
        <div className="add-address">
          <p>Student Address</p>
          <input
            type="text"
            name="address"
            placeholder="Enter Teacher Address"
          />
        </div>
        <div className="add-age-tel">
          <div className="add-age">
            <p>Instrument</p>
            <input
              type="text"
              name="instrument"
              placeholder="Enter Teaching Instrument"
            />
          </div>
          <div className="add-tel">
            <p>Telephone No</p>
            <input
              type="text"
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
