import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

export default function Profile() {
    return (
        <div className="account-form-container">
            <h2>Profile</h2>
            <div className="account-form">
                <input className="form-control" defaultValue="alice" placeholder="username" />
                <input className="form-control" defaultValue="123" placeholder="password" type="password" />
                <input className="form-control" defaultValue="Alice" placeholder="First Name" />
                <input className="form-control" defaultValue="Wonderland" placeholder="Last Name" />
                <input className="form-control" defaultValue="2000-01-01" type="date" />
                <input className="form-control" defaultValue="alice@wonderland" type="email" placeholder="Email" />
                <select className="form-control" defaultValue="FACULTY">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
                <Link to="/Kanbas/Account/Signin" className="btn btn-danger">
                    Sign out
                </Link>
            </div>
        </div>
    );
}