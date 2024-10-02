import React, { useState } from "react";
import "./Add.css";

function Add() {
  return (
    <div className="add">
      <h2 className="title">Add New Student</h2>
      <form>
        <div className="add-id">
          <p>Id No</p>
          <input type="text" placeholder="Enter Id No" />
        </div>
        <div className="add-name">
          <p>Name</p>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="add-address">
          <p>Address</p>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div className="add-age-tel">
          <div className="add-age">
            <p>Age</p>
            <input type="number" placeholder="Enter Age" />
          </div>
          <div className="add-tel">
            <p>Telephone No</p>
            <input type="text" name="price" placeholder="Enter Telephone No" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
