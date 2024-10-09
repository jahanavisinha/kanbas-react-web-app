import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label d-block">
                <h5>Assignment Name</h5>
            </label>

            <input id="wd-name" className="form-control" value="A1" />

            <textarea id="wd-description" className="form-control mt-5" rows={10}>
        The assignment is available online. Submit a link to the landing page of
        your web application running on Netlify. The landing page should include
        the following: Your full name and section, Links to each of the lab
        assignments, Link to the Kanbas application, Links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>

            <form>
                <div className="mt-5 row g-3">
                    <label
                        htmlFor="wd-points"
                        className="form-label col-4 d-flex justify-content-end align-items-end pe-5"
                    >
                        Points
                    </label>
                    <input id="wd-points" value={100} className="form-control col" />
                </div>

                <div className="mt-2 row g-3">
                    <label
                        htmlFor="wd-group"
                        className="form-label col-4 d-flex justify-content-end align-items-end pe-5"
                    >
                        Assignment Group
                    </label>
                    <select name="assignment-group" id="wd-group" className="col form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </div>

                <div className="mt-2 row g-3">
                    <label
                        htmlFor="wd-display-grade-as"
                        className="form-label col-4 d-flex justify-content-end align-items-end pe-5"
                    >
                        Display Grade as
                    </label>
                    <select name="display-grade-as" id="wd-display-grade-as" className="col form-select">
                        <option value="PERCENTAGE">Percentage</option>
                    </select>
                </div>

                <div className="mt-2 row g-3">
                    <label
                        htmlFor="wd-submission-type"
                        className="form-label col-4 d-flex justify-content-end align-text-end pe-5"
                    >
                        Submission Type
                    </label>
                    <div className="container border border-dark col rounded-1">
                        <select name="submission-type" id="wd-submission-type" className="form-select ml-3 mt-3 mb-3">
                            <option value="Online">Online</option>
                        </select>

                        <div>
                            <h6 className="ms-3 fw-bold">Online Entry Options:</h6>
                            <div className="form-check ms-3">
                                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-check-label">
                                    Text Entry
                                </label>
                            </div>
                            <div className="form-check ms-3">
                                <input type="checkbox" id="wd-website-url" className="form-check-input" checked />
                                <label htmlFor="wd-website-url" className="form-check-label">
                                    Website URL
                                </label>
                            </div>
                            <div className="form-check ms-3">
                                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                <label htmlFor="wd-media-recordings" className="form-check-label">
                                    Media Recordings
                                </label>
                            </div>
                            <div className="form-check ms-3">
                                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                <label htmlFor="wd-student-annotation" className="form-check-label">
                                    Student Annotation
                                </label>
                            </div>
                            <div className="form-check ms-3 mb-3">
                                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                <label htmlFor="wd-file-upload" className="form-check-label">
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 row g-3">
                    <label
                        htmlFor="wd-assign-to"
                        className="form-label col-4 d-flex justify-content-end align-text-end pe-5"
                    >
                        Assign
                    </label>
                    <div className="container border border-dark col rounded-1">
                        <label htmlFor="wd-assign-to" className="form-label mt-3 fw-bold">
                            Assign to
                        </label>
                        <div className="container border border-dark rounded-1">
                            <button className="flex btn btn-secondary mt-2 mb-2">
                                Everyone <RxCross2 className="float-end" />
                            </button>
                        </div>

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
                                <LuCalendarDays />
                            </label>
                        </div>

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
                                        <LuCalendarDays />
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
                                        <LuCalendarDays />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div id="wd-assignment-submission-buttons">
                    <button className="btn btn-danger float-end text-white me-1">Save</button>
                    <button className="btn btn-secondary float-end me-1">Cancel</button>
                </div>
            </form>
        </div>
    );
}
