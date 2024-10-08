import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

export default function Signup() {
    return (
        <div className="account-form-container">
            <h2>Sign up</h2>
            <div className="account-form">
                <input className="form-control" placeholder="username" />
                <input className="form-control" placeholder="password" type="password" />
                <input className="form-control" placeholder="verify password" type="password" />
                <Link to="/Kanbas/Account/Profile" className="btn btn-primary btn-block">
                    Sign up
                </Link>
                <Link to="/Kanbas/Account/Signin" className="form-link">Sign in</Link>
            </div>
        </div>
    );
}