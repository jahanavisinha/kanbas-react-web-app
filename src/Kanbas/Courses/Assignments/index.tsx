import React from 'react';
import { useParams } from "react-router";
import { BsThreeDotsVertical, BsCheckCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import './Assignments.css';

export default function Assignments() {
    const { cid } = useParams(); // Retrieve course ID
    const assignments = db.assignments; // Load assignments from the database

    return (
        <div className="container-fluid p-4">
            {/* Assignments Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 bg-light p-3 border">
                <div className="d-flex align-items-center">
                    <BsThreeDotsVertical className="me-3" />
                    <h4 className="mb-0">▼ ASSIGNMENTS</h4>
                </div>
                <div className="d-flex align-items-center">
                    <span className="badge bg-light text-dark border me-2 px-3 py-2 rounded-pill">40% of Total</span>
                    <FaPlus className="me-3" />
                    <BsThreeDotsVertical />
                </div>
            </div>

            {/* Assignments List */}
            <ul className="list-group assignments-list">
                {assignments
                    .filter((assignment) => assignment.course === cid)
                    .map((assignment) => (
                        <li key={assignment._id} className="list-group-item border-start-0 border-end-0 py-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsThreeDotsVertical className="me-3 text-secondary" />
                                    <MdOutlineEditNote className="me-3 text-success fs-3" />
                                    <div>
                                        <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-dark text-decoration-none fw-bold">
                                            {assignment.title}
                                        </Link>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="text-secondary"> | Not available until {new Date(assignment.availableFrom).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })} | </span>
                                            <span className="text-secondary">Due {new Date(assignment.dueDate).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })} | </span>
                                            <span className="text-secondary">{assignment.points} pts</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <BsCheckCircleFill className="text-success me-3" />
                                    <BsThreeDotsVertical className="text-secondary" />
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}