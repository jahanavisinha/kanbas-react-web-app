import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import './Assignments.css'; // Assuming you have a CSS file for additional styling

export default function Assignments() {
    return (
        <div className="container-fluid">
            {/* AssignmentsControls */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                {/* Search Field */}
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

                {/* Buttons Floated to Right */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2">
                        <FaPlus /> Group
                    </button>
                    <button className="btn btn-danger">
                        <FaPlus /> Assignment
                    </button>
                </div>
            </div>

            {/* Assignments Table */}
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment-group list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                        {/* Title Section with Icon */}
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            ASSIGNMENTS
                        </div>
                        {/* 40% of Total Badge */}
                        <div className="badge bg-light text-dark border border-secondary rounded-circle p-2">
                            40% of Total
                        </div>
                    </div>
                    <ul className="wd-assignments-list list-group rounded-0">
                        {/* Assignment A1 */}
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center assignment-border">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineEditNote className="ms fs-1" />
                            <div className="flex-grow-1">
                                <Link
                                    to="/Kanbas/Courses/1234/Assignments/A1"
                                    className="text-dark text-decoration-none fs-5 fw-bold"
                                >
                                    A1
                                </Link>
                                <div className="text-muted">
                                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00 AM | Due May 13 at 11:59 PM | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>

                        {/* Assignment A2 */}
                        <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center assignment-border">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdOutlineEditNote className="ms fs-1" />
                            <div className="flex-grow-1">
                                <Link
                                    to="/Kanbas/Courses/1234/Assignments/A2"
                                    className="text-dark text-decoration-none fs-5 fw-bold"
                                >
                                    A2
                                </Link>
                                <div className="text-muted">
                                    <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00 AM | Due May 20 at 11:59 PM | 100 pts
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
