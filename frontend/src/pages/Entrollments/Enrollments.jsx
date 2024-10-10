import React from "react";
import "./Enrollments.css";
import { FaRegEdit } from "react-icons/fa";

function Enrollments() {
  return (
    <div>
      <div className="table-container">
        <div className="title-container">
          <button>
            Add Entrollment
          </button>
          <h2>List of Enrollments</h2>
        </div>
        <table className="items-table">
          <thead>
            <tr>
              <th>Entrollment Id</th>
              <th>Batch Id</th>
              <th>Student Name</th>
              <th>Joined Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>enr10001</td>
              <td>btch10001</td>
              <td>Chandupa Ranawaka</td>
              <td>2024/10/10</td>
              <td>
                <button>
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

export default Enrollments;
