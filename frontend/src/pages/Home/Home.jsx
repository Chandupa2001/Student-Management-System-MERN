import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaRegUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";
import axios from "axios";

function Home() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const tokenFromStorage = await localStorage.getItem("token");
      setToken(tokenFromStorage);
    };

    getToken();
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
