import React, { useEffect, useState } from "react";
import "./Teachers.css";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Teachers() {

  const navigate = useNavigate();

  const onEditPress = () => {
    navigate("/dashboard/editTeacher");
  };

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
            <tr>
              <td>tch10001</td>
              <td>Pethum Sandaruwan</td>
              <td>Pelmadulla</td>
              <td>Guitar</td>
              <td>0716060511</td>
              <td>
                <button onClick={onEditPress}>
                  <FaRegEdit color="#6E726E" size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
