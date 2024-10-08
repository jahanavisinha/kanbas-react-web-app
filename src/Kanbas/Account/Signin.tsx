import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css"; // Make sure this CSS file exists and is properly styled

export default function Signin() {
    return (
        <div className="signin-container">
            <h2>Signin</h2>
            <div className="signin-form">
                <input className="form-control" placeholder="username" />
                <input className="form-control" placeholder="password" type="password" />
                <Link to="/Kanbas/Dashboard" className="btn btn-primary btn-block" id="wd-signin-btn">
                    Signin
                </Link>
                <Link to="/Kanbas/Account/Signup" className="signup-link" id="wd-signup-link">Signup</Link>
            </div>
        </div>
    );
}