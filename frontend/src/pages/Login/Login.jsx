import React, { useState } from "react";
import "./Login.css";
import { logoWhiteTranceparent } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
      });
      const [token, setToken] = useState("");
      const [hidePass, setHidePass] = useState(true);
    
      const navigation = useNavigate();
    
      const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value });
      };
    
      const onLogin = async (event) => {
        event.preventDefault();
        let url = "http://localhost:3000/api/user/signin";
    
        try {
          const response = await axios.post(url, data);
          if (response.data.success) {
            setToken(response.data.success);
            localStorage.setItem("token", response.data.token);
            console.log("Logged In");
            navigation('/dashboard/home');
          } else {
            alert(response.data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={onLogin}>
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
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </div>

        <div className="login-welcome">
          <img src={logoWhiteTranceparent} />
          <h2>Welcome Back!</h2>
          <p>Don’t have an account?</p>
          <button
            className="signup-button"
            onClick={() => navigation("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
