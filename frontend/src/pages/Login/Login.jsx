import React from "react";
import "./Login.css";
import { logoNoBac } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigation = useNavigate();

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-form">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="login-welcome">
                    <img src={logoNoBac} />
                    <h2>Welcome Back!</h2>
                    <p>Don’t have an account?</p>
                    <button className="signup-button" onClick={() => navigation("/signup") }>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
