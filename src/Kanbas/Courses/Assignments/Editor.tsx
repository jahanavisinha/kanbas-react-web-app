import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import * as db from "../../Database";
import React from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './Assignments.css';


export default function AssignmentEditor() {
    const { cid, aid } = useParams(); // Get course ID and assignment ID from URL params
    const assignment = db.assignments.find((a) => a._id === aid && a.course === cid); // Find the correct assignment

    if (!assignment) {
        return <div>Assignment not found</div>; // Handle case where assignment isn't found
    }

    return (
        <div id="wd-assignments-editor">
            {/* Assignment Title */}
            <label htmlFor="wd-name" className="form-label d-block">
                <h5>Assignment Name</h5>
            </label>
            <input
                id="wd-name"
                className="form-control"
                value={assignment.title} // Assignment title from database
                readOnly
            />

            {/* Assignment Description */}
            <textarea id="wd-description" className="form-control mt-5" rows={10} readOnly>
                {`The assignment is available online.
                
Submit a link to your web application running on Netlify. 

The landing page should include:
    - Your full name and section
    - Links to each of the lab assignments
    - Link to the Kanbas application
    - Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
            </textarea>

            <form>
                {/* Points */}
                <div className="mt-5 row g-3">
                    <label htmlFor="wd-points" className="form-label col-4 d-flex justify-content-end align-items-end pe-5">
                        Points
                    </label>
                    <input id="wd-points" value={assignment.points} className="form-control col" readOnly />
                </div>


                {/* Submission Type and other inputs can stay as in previous versions */}

                <div className="mt-2 row g-3">
                    <label
                        htmlFor="wd-assign-to"
                        className="form-label col-4 d-flex justify-content-end align-text-end pe-5"
                    >
                        Assign
                    </label>
                    <div className="container border border-dark col rounded-1">
                        {/* Assign to Section */}
                        <label htmlFor="wd-assign-to" className="form-label mt-3 fw-bold">
                            Assign to
                        </label>
                        <div className="container border border-dark rounded-1">
                            <button className="flex btn btn-secondary mt-2 mb-2">
                                Everyone <RxCross2 className="float-end"/>
                            </button>
                        </div>

                        {/* Due Date Section */}
                        <label htmlFor="wd-due-date" className="form-label mt-3 fw-bold">
                            Due
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="wd-due-date"
                                className="input-group-text form-control"
                                value="May 13, 2024, 11:59PM"
                            />
                            <label
                                htmlFor="wd-due-date"
                                className="rounded-1 input-group-text form-label bg-secondary"
                            >
                                <LuCalendarDays/>
                            </label>
                        </div>

                        {/* Available from and Available until Section */}
                        <div className="row mt-3 mb-3">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="form-label fw-bold">
                                    Available from
                                </label>
                                <div className="input-group">
                                    <input
                                        className="input-group-text rounded-1 form-control"
                                        type="text"
                                        id="wd-available-from"
                                        value="May 6, 2024, 12:00AM"
                                    />
                                    <label
                                        htmlFor="wd-available-from"
                                        className="rounded-1 input-group-text form-label bg-secondary"
                                    >
                                        <LuCalendarDays/>
                                    </label>
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="form-label fw-bold">
                                    Until
                                </label>
                                <div className="input-group">
                                    <input
                                        className="input-group-text rounded-1 form-control"
                                        type="text"
                                        id="wd-available-until"
                                        value="May 20, 2024, 11:59PM"
                                    />
                                    <label
                                        htmlFor="wd-available-until"
                                        className="rounded-1 input-group-text form-label bg-secondary"
                                    >
                                        <LuCalendarDays/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                {/* Save and Cancel Buttons */}
                <div id="wd-assignment-submission-buttons">
                    <button className="btn btn-danger float-end text-white me-1">Save</button>
                    <button className="btn btn-secondary float-end me-1">Cancel</button>
                </div>
            </form>
        </div>
    );
}