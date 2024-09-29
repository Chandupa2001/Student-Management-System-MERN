import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { logoNoBac } from "../../assets/assets";

const SignUp = () => {
    const navigation = useNavigate();

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
                    <form>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
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
