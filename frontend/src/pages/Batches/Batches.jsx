import React from "react";
import "./Batches.css";

function Batches() {
  return (
    <div>
      <div className="table-container">
        <div className="title-container">
          <button>
            Add Batch
          </button>
          <h2>List of Batches</h2>
        </div>
        <table className="items-table">
          <thead>
            <tr>
              <th>Batch Id</th>
              <th>Teacher Name</th>
              <th>Instrument</th>
              <th>Venue</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>btch10001</td>
              <td>Chandupa Ranawaka</td>
              <td>Tabla</td>
              <td>YMBA Matara</td>
              <td>
                <button>
                  View Batch
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Batches;
