import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";
import axios from "axios";

function Home() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [students, setStudents] = useState("");
  const [teachers, setTeachers] = useState('');
  const [batches, setBatches] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const tokenFromStorage = await localStorage.getItem("token");
      setToken(tokenFromStorage);
    };

    getToken();
    getStudents();
    getTeachers();
    getBatches();
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/get", {
        headers: { token },
      });
      setName(response.data.name);
      console.log(response);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const getStudents = async () => {
    const url="http://localhost:3000/api/student/get";
    try {
      const response = await axios.get(url);
      const students = response.data.data;
      if (Array.isArray(students)) {
        setStudents(students.length)
      } else {
        console.log('students is not an array');
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getTeachers = async () => {
    const url="http://localhost:3000/api/teacher/get";
    try {
      const response = await axios.get(url);
      const teachers = response.data.data;
      if (Array.isArray(teachers)) {
        setTeachers(teachers.length)
      } else {
        console.log('Teacher is not an array');
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getBatches = async () => {
    const url="http://localhost:3000/api/batch/get";
    try {
      const response = await axios.get(url);
      const batches = response.data.data;
      if (Array.isArray(batches)) {
        setBatches(batches.length)
      } else {
        console.log('class is not an array');
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container-home">
      <div>
        <h3 className="header-text">{"Welcome back, " + name}</h3>
      </div>
      <div className="container-box-row">
        <div className="container-box">
          <p className="box-title">Students</p>
          <div className="box-items">
            <FaRegUser className="box-icon" size={25} />
            <span className="box-text">{students}</span>
          </div>
        </div>
        <div className="container-box">
          <p className="box-title">Teachers</p>
          <div className="box-items">
            <BsBoxSeam className="box-icon" size={25} />
            <span className="box-text">{teachers}</span>
          </div>
        </div>
        <div className="container-box">
          <p className="box-title">Batches</p>
          <div className="box-items">
            <PiListChecksBold className="box-icon" size={25} />
            <span className="box-text">{batches}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
