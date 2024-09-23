import React from "react";
import { Link } from "react-router-dom";

export default function TOC() {
    return (
        <ul>
            <li><Link to="/Labs">Labs</Link></li>
            <li><Link to="/Labs/Lab1">Lab 1</Link></li>
            <li><Link to="/Labs/Lab2">Lab 2</Link></li>
            <li><Link to="/Labs/Lab3">Lab 3</Link></li>
            <li><Link to="/Kanbas">Kanbas</Link></li>
            {/* Added my jahanavisinha GitHub repository link */}
            <li>
                <a id="wd-github" href="https://github.com/jahanavisinha/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">
                    Jahanavi Sinha's Kanbas GitHub Repository
                </a>
            </li>
        </ul>
    );
}
