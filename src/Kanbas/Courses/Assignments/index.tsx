// // export default function Assignments() {
// //     return (
// //         <div id="wd-assignments">
// //             <input id="wd-search-assignment"
// //                    placeholder="Search for Assignments" />
// //             <button id="wd-add-assignment-group">+ Group</button>
// //             <button id="wd-add-assignment">+ Assignment</button>
// //             <h3 id="wd-assignments-title">
// //                 ASSIGNMENTS 40% of Total <button>+</button>
// //             </h3>
// //             <ul id="wd-assignment-list">
// //                 <li className="wd-assignment-list-item">
// //                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
// //                         A1 - ENV + HTML
// //                     </a>
// //                     <div>
// //                         Multiple Modules | <span
// //                         style={{fontWeight: "bold"}}>Not available until</span> May 6 at 12:00am |
// //                         <span
// //                             style={{fontWeight: "bold"}}> Due</span> May 13 at 11:59pm | 100 pts
// //                     </div>
// //                 </li>
// //
// //                 <li className="wd-assignment-list-item">
// //                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
// //                         A2 - CSS + BOOTSTRAP
// //                     </a>
// //                     <div>
// //                         Multiple Modules | <span
// //                         style={{fontWeight: "bold"}}>Not available until</span> May 13 at 12:00am |
// //                         <span
// //                             style={{fontWeight: "bold"}}> Due</span> May 20 at 11:59pm | 100 pts
// //                     </div>
// //                 </li>
// //
// //                 <li className="wd-assignment-list-item">
// //                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
// //                         A3 - JAVASCRIPT + REACT
// //                     </a>
// //                     <div>
// //                         Multiple Modules | <span
// //                         style={{fontWeight: "bold"}}>Not available until</span> May 20 at 12:00am |
// //                         <span
// //                             style={{fontWeight: "bold"}}> Due</span> May 27 at 11:59pm | 100 pts
// //                     </div>
// //                 </li>
// //
// //             </ul>
// //         </div>
// //     );
// // }
//
//
// import AssignmentsControls from "./AssignmentsControls"; // importing the controls
// import { BsThreeDots, BsCheckCircle } from "react-icons/bs"; // importing icons for the checkmark and menu
//
// export default function Assignments() {
//     return (
//         <div>
//             <AssignmentsControls /><br/><br/>
//             <h3 id="wd-assignments-title">
//                 ASSIGNMENTS 40% of Total <button className="btn btn-light">+</button>
//             </h3>
//
//             <ul id="wd-assignment-list" className="list-group rounded-0 mt-4">
//                 <li className="wd-assignment-list-item list-group-item p-3 border-start border-success">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <a className="wd-assignment-link fs-5" href="#/Kanbas/Courses/1234/Assignments/123">
//                             A1 - ENV + HTML
//                         </a>
//                         <div className="d-flex align-items-center">
//                             <span className="me-2">
//                                 <BsCheckCircle className="text-success" />
//                             </span>
//                             <BsThreeDots />
//                         </div>
//                     </div>
//                     <div className="text-muted small">
//                         Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
//                         <strong> Due</strong> May 13 at 11:59pm | 100 pts
//                     </div>
//                 </li>
//
//                 <li className="wd-assignment-list-item list-group-item p-3 border-start border-success">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <a className="wd-assignment-link fs-5" href="#/Kanbas/Courses/1234/Assignments/123">
//                             A2 - CSS + BOOTSTRAP
//                         </a>
//                         <div className="d-flex align-items-center">
//                             <span className="me-2">
//                                 <BsCheckCircle className="text-success" />
//                             </span>
//                             <BsThreeDots />
//                         </div>
//                     </div>
//                     <div className="text-muted small">
//                         Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
//                         <strong> Due</strong> May 20 at 11:59pm | 100 pts
//                     </div>
//                 </li>
//
//                 <li className="wd-assignment-list-item list-group-item p-3 border-start border-success">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <a className="wd-assignment-link fs-5" href="#/Kanbas/Courses/1234/Assignments/123">
//                             A3 - JAVASCRIPT + REACT
//                         </a>
//                         <div className="d-flex align-items-center">
//                             <span className="me-2">
//                                 <BsCheckCircle className="text-success" />
//                             </span>
//                             <BsThreeDots />
//                         </div>
//                     </div>
//                     <div className="text-muted small">
//                         Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
//                         <strong> Due</strong> May 27 at 11:59pm | 100 pts
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     );
// }


import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {MdOutlineEditNote} from "react-icons/md";

export default function Assignments() {
    return (
        <div>
            {/* AssignmentsControls */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group" style={{ width: "300px" }}>
                    <span className="input-group-text bg-white border-end-0">
                        <BsSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control border-start-0"
                        placeholder="Search..."
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2"> {/* Change to gray */}
                        <FaPlus/> Group
                    </button>
                    <button className="btn btn-danger">
                        <FaPlus/> Assignment
                    </button>
                </div>
            </div>

            {/* Assignments Table */}
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment-group list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                    </div>
                    <ul className="wd-assignments-list list-group rounded-0">
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center border-start border-success border-5">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineEditNote className="ms fs-1"/>
                            <div className="flex-grow-1">
                                <a href="#" className="text-dark text-decoration-none fs-5 fw-bold">A1</a>
                                <div className="text-muted">
                                    Multiple Modules | Not available until May 6 at 12:00 AM | Due May 13 at 11:59 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center border-start border-success border-5">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineEditNote className="ms fs-1"/>
                            <div className="flex-grow-1">
                                <a href="#" className="text-dark text-decoration-none fs-5 fw-bold">A2</a>
                                <div className="text-muted">
                                    Multiple Modules | Not available until May 13 at 12:00 AM | Due May 20 at 11:59 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
