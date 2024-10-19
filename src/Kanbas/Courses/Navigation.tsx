// import { Link, useLocation } from "react-router-dom";
//
// export default function CoursesNavigation() {
//     const location = useLocation();  // Get the current location path
//
//     return (
//         <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//             <Link
//                 to="/Kanbas/Courses/1234/Home"
//                 id="wd-course-home-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Home" ? "active" : "text-danger"} border border-0`}
//             >
//                 Home
//             </Link>
//             <Link
//                 to="/Kanbas/Courses/1234/Modules"
//                 id="wd-course-modules-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Modules" ? "active" : "text-danger"} border border-0`}
//             >
//                 Modules
//             </Link>
//             <Link
//                 to="/Kanbas/Courses/1234/Piazza"
//                 id="wd-course-piazza-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Piazza" ? "active" : "text-danger"} border border-0`}
//             >
//                 Piazza
//             </Link>
//             <Link
//                 to="/Kanbas/Courses/1234/Zoom"
//                 id="wd-course-zoom-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Zoom" ? "active" : "text-danger"} border border-0`}
//             >
//                 Zoom
//             </Link>
//             <Link
//                 to="/Kanbas/Courses/1234/Assignments"
//                 id="wd-course-assignments-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Assignments" ? "active" : "text-danger"} border border-0`}
//             >
//                 Assignments
//             </Link>
//             <Link
//                 to="/Kanbas/Courses/1234/People"
//                 id="wd-course-people-link"
//                 className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/People" ? "active" : "text-danger"} border border-0`}
//             >
//                 People
//             </Link>
//         </div>
//     );
// }


import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
    const location = useLocation();
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                const path = `/Kanbas/Courses/${cid}/${link}`;
                return (
                    <Link
                        key={link}
                        to={path}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item ${location.pathname === path ? "active" : "text-danger"} border border-0`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}