import { useParams } from "react-router";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons"; // Assuming this is a shared control component
import * as db from "../../Database"; // Import the database with assignments and courses
import './Assignments.css'; // Custom CSS

export default function Assignments() {
    const { cid } = useParams(); // Retrieve the course's ID from the URL
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
                    .filter((assignment: any) => assignment.course === cid) // Filter assignments by course ID
                    .map((assignment: any) => (
                        <li key={assignment._id} className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                                <BsGripVertical className="me-2 fs-3" /> {assignment.title}
                                <LessonControlButtons />
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
                                            <span className="text-danger">Multiple Modules</span> | Due Soon | 100 pts
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
