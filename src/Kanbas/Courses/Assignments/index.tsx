import { useParams } from "react-router";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import './Assignments.css';
import { format } from 'date-fns';

export default function Assignments() {
    const { cid } = useParams(); // Retrieve course ID
    const assignments = db.assignments; // Load assignments from the database

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
                {assignments
                    .filter((assignment) => assignment.course === cid) // Filter assignments by course ID
                    .map((assignment) => (
                        <li key={assignment._id} className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <span>{assignment.title}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <LessonControlButtons />
                                    <div className="badge bg-light text-dark border border-secondary rounded-circle p-2 ms-2">
                                        40% of Total
                                    </div>
                                </div>
                            </div>
                            <ul className="wd-assignments-list list-group rounded-0">
                                <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center assignment-border">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineEditNote className="ms fs-1" />
                                    <div className="flex-grow-1">
                                        <Link
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="text-dark text-decoration-none fs-5 fw-bold"
                                        >
                                            {assignment.title}
                                        </Link>
                                        <div className="text-muted">
                                            <span className="text-danger">Multiple Modules</span> | Not available until {format(new Date(assignment.availableFrom), 'MMMM d, yyyy h:mm a')} | Due {format(new Date(assignment.dueDate), 'MMMM d, yyyy h:mm a')} | {assignment.points} pts
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
}