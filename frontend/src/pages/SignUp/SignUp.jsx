import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { logoNoBac } from "../../assets/assets";
import axios from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    let url = "http://localhost:3000/api/user/signup";

    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        alert("Registered Successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-welcome">
          <img src={logoNoBac} />
          <h2>Hello Friend!</h2>
          <p>Already have an account?</p>
          <button className="login-button" onClick={() => navigation("/")}>
            Sign In
          </button>
        </div>

        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={onSignUp}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                onChange={onChangeHandler}
                name="name"
                value={data.name}
                placeholder="Name"
                required
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                onChange={onChangeHandler}
                name="email"
                value={data.email}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <div className="input-icon-wrapper">
                <input
                  type={hidePass ? "password" : "text"}
                  id="password"
                  onChange={onChangeHandler}
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  required
                />
                {hidePass ? (
                  <FaRegEye
                    className="password-icon"
                    onClick={() => setHidePass(!hidePass)}
                  />
                ) : (
                  <FaEyeSlash
                    className="password-icon"
                    onClick={() => setHidePass(!hidePass)}
                  />
                )}
              </div>
            </div>
            <button type="submit" className="sign-up-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
