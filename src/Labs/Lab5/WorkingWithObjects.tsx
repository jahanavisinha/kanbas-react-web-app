import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: "M101",
        name: "Web Development",
        description: "Full stack web development course",
        course: "CS5610"
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Assignment Operations</h4>
            <h5>Modify Title</h5>
            <input
                className="form-control w-75"
                value={assignment.title}
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}
            />
            <a
                id="wd-update-assignment-title"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>

            <h5>Modify Score</h5>
            <input
                type="number"
                className="form-control w-75"
                value={assignment.score}
                onChange={(e) => setAssignment({...assignment, score: parseInt(e.target.value)})}
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
            </a>

            <h5>Modify Completed Status</h5>
            <input
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}
            />
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
            </a>

            {/* Module Section */}
            <h4>Module Operations</h4>
            <h5>Modify Name</h5>
            <input
                className="form-control w-75"
                value={module.name}
                onChange={(e) => setModule({...module, name: e.target.value})}
            />
            <a
                id="wd-update-module-name"
                className="btn btn-primary"
                href={`${MODULE_API_URL}/name/${module.name}`}
            >
                Update Module Name
            </a>

            <h5>Modify Description</h5>
            <input
                className="form-control w-75"
                value={module.description}
                onChange={(e) => setModule({...module, description: e.target.value})}
            />
            <a
                id="wd-update-module-description"
                className="btn btn-primary"
                href={`${MODULE_API_URL}/description/${module.description}`}
            >
                Update Module Description
            </a>
        </div>
    );
}