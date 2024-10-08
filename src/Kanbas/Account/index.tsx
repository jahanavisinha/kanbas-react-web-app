import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import "./Account.css"; // We'll create this CSS file for layout styling

export default function Account() {
    return (
        <div className="account-container">
            <nav className="account-nav">
                <Link to="/Kanbas/Account/Signin" className="nav-item active">Signin</Link>
                <Link to="/Kanbas/Account/Signup" className="nav-item">Signup</Link>
                <Link to="/Kanbas/Account/Profile" className="nav-item">Profile</Link>
            </nav>
            <div className="account-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}