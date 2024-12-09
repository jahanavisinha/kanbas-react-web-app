// import { Link } from "react-router-dom";
// import { useLocation } from "react-router";
// import { useSelector } from "react-redux";
// export default function AccountNavigation() {
//     const { pathname } = useLocation();
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//     return (
//         <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//             <ul className="nav nav-pills fs-5 rounded-0 list-group">
//                 {links.map( ( link: string ) => (
//                     <li className="nav-item">
//                         <Link to={`/Kanbas/Account/${link}`}
//                               className={`nav-link text-danger border-0 mb-3 pl-2 ${pathname.includes(link) ? "active-secondary-nav" : ""}`}>
//                             {link}  </Link>
//                     </li>
//                 ))}</ul></div>
//     );}
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useLocation} from "react-router";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { pathname } = useLocation();
    return (
        <div id="wd-account-navigation" className="list-group">
            {links.map((link) => (
                <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
        </div>
    );}
