import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
        { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    ];
    return (
        <div id="wd-kanbas-navigation" style={{width: 120}}
                     className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
                    <a id="wd-neu-link" target="_blank"
                       href="https://www.northeastern.edu/"
                       className="list-group-item bg-black border-0 text-center">
                        <img src="https://brand.northeastern.edu/wp-content/uploads/2022/06/MONOGRAM-red-2-1.svg" width="75px" alt="NEU Logo" />
                    </a>
            <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger"})}
                    <br />
                    {link.label}
                </Link>
            ))}
        </div>
    );}



// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { Link, useLocation } from "react-router-dom";
// import React from "react";
//
// export default function KanbasNavigation() {
//     const { pathname } = useLocation();
//     const links = [
//         { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
//         { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
//         { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
//         { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
//         { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
//     ];
//
//     return (
//         <div id="wd-kanbas-navigation" style={{width: 120}}
//              className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//             <a id="wd-neu-link" target="_blank"
//                href="https://www.northeastern.edu/"
//                className="list-group-item bg-black border-0 text-center">
//                 <img src="https://brand.northeastern.edu/wp-content/uploads/2022/06/MONOGRAM-red-2-1.svg" width="75px" alt="NEU Logo" />
//             </a>
//
//             <Link to="/Kanbas/Account" id="wd-account-link"
//                   className="list-group-item text-center border-0 bg-black text-white">
//                 <FaRegCircleUser className="fs-1 text-white" />
//                 Account
//             </Link>
//
//             <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
//                   className="list-group-item text-center border-0 bg-white text-danger">
//                 <AiOutlineDashboard className="fs-1 text-danger" />
//                 Dashboard
//             </Link>
//
//             <Link to="/Kanbas/Courses" id="wd-course-link"
//                   className="list-group-item text-white bg-black text-center border-0">
//                 <LiaBookSolid className="fs-1 text-danger" />
//                 Courses
//             </Link>
//
//             {/* Complete styling the rest of the links as needed */}
//             <Link to="/Kanbas/Calendar" id="wd-calendar-link"
//                   className="list-group-item text-white bg-black text-center border-0">
//                 <IoCalendarOutline className="fs-1 text-danger" />
//                 Calendar
//             </Link>
//
//             <Link to="/Kanbas/Inbox" id="wd-inbox-link"
//                   className="list-group-item text-white bg-black text-center border-0 d-flex flex-column align-items-center">
//                 <FaInbox className="fs-1 text-danger" />
//                 Inbox
//             </Link>
//
//
//             <Link to="/Kanbas/Settings" id="wd-settings-link"
//                   className="list-group-item text-white bg-black text-center border-0">
//                 <LiaCogSolid className="fs-1 text-danger" />
//                 Settings
//             </Link>
//         </div>
//     );
// }
