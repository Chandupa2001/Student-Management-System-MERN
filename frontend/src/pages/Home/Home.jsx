import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";

function Home() {
    return (
        <div className="container-home">
            <div>
                <h3 className="header-text">{"Welcome back, Chandupa"}</h3>
            </div>
            <div className="container-box-row">
                <div className="container-box">
                    <p className="box-title">Students</p>
                    <div className="box-items">
                        <FaRegUser className="box-icon" size={25} />
                        <span className="box-text">10</span>
                    </div>
                </div>
                <div className="container-box">
                    <p className="box-title">Teachers</p>
                    <div className="box-items">
                        <BsBoxSeam className="box-icon" size={25} />
                        <span className="box-text">10</span>
                    </div>
                </div>
                <div className="container-box">
                    <p className="box-title">Classes</p>
                    <div className="box-items">
                        <PiListChecksBold className="box-icon" size={25} />
                        <span className="box-text">10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
