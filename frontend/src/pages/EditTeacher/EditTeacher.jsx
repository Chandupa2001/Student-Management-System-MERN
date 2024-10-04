import React, { useEffect, useState } from "react";
import "./EditTeacher.css";

function EditTeacher() {
    return (
        <div className="edit">
            <form>
                <div className="edit-id">
                    <p>TeacherId No</p>
                    <input
                        type="text"
                        name="teacherId"
                        placeholder="Enter TeacherId No"
                        readOnly
                    />
                </div>
                <div className="edit-name">
                    <p>Teacher Name</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Teacher Name"
                    />
                </div>
                <div className="edit-address">
                    <p>Teacher Address</p>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter Teacher Address"
                    />
                </div>
                <div className="edit-age-tel">
                    <div className="edit-age">
                        <p>Age</p>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter Age"
                        />
                    </div>
                    <div className="edit-tel">
                        <p>Telephone No</p>
                        <input
                            type="text"
                            name="telephoneNo"
                            placeholder="Enter Telephone No"
                        />
                    </div>
                </div>
                <button type="submit" className="edit-btn">
                    Edit
                </button>
            </form>
        </div>
    );
}

export default EditTeacher;
