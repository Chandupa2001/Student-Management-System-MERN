import React from "react";
import "./Login.css";
import { logoNoBac } from "../../assets/assets";

const LoginPage = () => {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-form">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" placeholder="Username" />
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
                    <h2>Welcome to login</h2>
                    <p>Don’t have an account?</p>
                    <button className="sign-up-button">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
