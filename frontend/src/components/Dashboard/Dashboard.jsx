import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { logoNoBac } from "../../assets/assets.js";
import { IoMdHome } from 'react-icons/io';
import { FaClipboardList, FaUserCircle } from 'react-icons/fa';
import { PiListChecksFill, PiStudentFill } from 'react-icons/pi';
import { AiFillNotification } from 'react-icons/ai';
import { GiTeacher } from "react-icons/gi";

function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logoName">
            <img src={logoNoBac} alt="logo" />
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="home" end activeClassName="active-link">
              <IoMdHome className="icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="students" activeClassName="active-link">
              <PiStudentFill className="icon" />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="teachers" activeClassName="active-link">
              <GiTeacher className="icon" />
              <span>Teachers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="orders" activeClassName="active-link">
              <PiListChecksFill className="icon" />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="deals" activeClassName="active-link">
              <AiFillNotification className="icon" />
              <span>Add Deals</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="view" activeClassName="active-link">
              <AiFillNotification className="icon" />
              <span>View Deals</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>TuneCraft Music School</h1>
          <FaUserCircle className="header-logo" size={30} color="#ffa457" />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
