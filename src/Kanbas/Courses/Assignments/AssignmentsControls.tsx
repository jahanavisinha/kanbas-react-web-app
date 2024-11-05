import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentsControls({ handleNewAssignment }: { handleNewAssignment: () => void }) {
    const navigate = useNavigate();
    const { cid } = useParams();

    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <input
                id="wd-search-assignment"
                className="form-control me-3"
                placeholder="Search for Assignments"
                style={{ width: "300px" }}
            />
            <div>
                <button className="btn btn-danger" onClick={handleNewAssignment}>
                    <FaPlus /> Assignment
                </button>
            </div>
        </div>
    );
}