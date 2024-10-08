import React, { useEffect, useState } from "react";
import "./Batches.css";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Batches() {

  const navigate = useNavigate();

  const [batches, setBatches] = useState([])

  useEffect(() => {
    fetchBatches();
  }, [])
  
  const fetchBatches = async () => {
    const url = "http://localhost:3000/api/batch/get"
    try {
        const response = await axios.get(url);
        if (response.data.success) {
            setBatches(response.data.data);
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
          <button onClick={() => navigate('/dashboard/add-batch')}>
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
            {batches.map((batch) => (
            <tr key={batch.id}>
              <td>{batch.batchId}</td>
              <td>{batch.teacherName}</td>
              <td>{batch.instrument}</td>
              <td>{batch.venue}</td>
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

export default Batches;
