import { FaPlus } from "react-icons/fa"; // import plus icon

export default function AssignmentsControls() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <input
                id="wd-search-assignment"
                className="form-control me-3"
                placeholder="Search for Assignments"
                style={{ width: "300px" }}
            />
            <div>
                <button className="btn btn-danger me-2">
                    <FaPlus /> Group
                </button>
                <button className="btn btn-danger">
                    <FaPlus /> Assignment
                </button>
            </div>
        </div>
    );
}