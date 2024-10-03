import React, { useEffect, useState } from "react";
import "./Students.css";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Items() {

  const navigate = useNavigate();


  return (
    <div>
      <div className="table-container">
        <div className="title-container">
            <button onClick={() => navigate('/dashboard/add-student')}>Add Student</button>
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
                <td>std1001</td>
                <td>Chandupa Ranawaka</td>
                <td>Matara</td>
                <td>23</td>
                <td>0711234567</td>
                <td>
                  <button>
                    <FaRegEdit color="#6E726E" size={20} />
                  </button>
                </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Items;
