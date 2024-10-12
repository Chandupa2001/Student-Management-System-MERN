import React from "react";
import "./Enroll.css";

function Enroll() {
  return (
    <div className="add">
      <h2 className="title">Enroll Student</h2>
      <form>
        <div className="add-id">
          <p>EnrollId No</p>
          <input
            type="text"
            name="enrollId"
            placeholder="Enter Enroll Id No"
          />
        </div>
        <div className="add-name">
          <p>Batch</p>
          <select
            name="teacherName"
            placeholder="Select Teacher Name"
          >
            <option value="" disabled>
              Select Batch
            </option>
              <option>
                btch10001
              </option>
          </select>
        </div>

        <div className="add-age-tel">
          <div className="add-age">
            <p>Student Name</p>
            <select
              name="instrument"
              placeholder="Select Student"
            >
              <option value="" disabled>
                Select Student
              </option>
                <option>
                  Chandupa
                </option>
            </select>
          </div>
          <div className="add-tel">
            <p>Date</p>
            <input
              type="date"
              name="date"
              placeholder="Enter Date"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Enroll
        </button>
      </form>
    </div>
  );
}

export default Enroll;
