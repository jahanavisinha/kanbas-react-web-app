import React from "react";
import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div>
            <Link to="/Kanbas/Account/Signin">Signin</Link>
            <Link to="/Kanbas/Account/Signup">Signup</Link>
            <Link to="/Kanbas/Account/Profile">Profile</Link>
        </div>
    );
}