// import { FaPlus } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom";
//
// export default function AssignmentsControls({ handleNewAssignment }: { handleNewAssignment: () => void }) {
//     const navigate = useNavigate();
//     const { cid } = useParams();
//
//     return (
//         <div className="d-flex justify-content-between align-items-center mb-4">
//             <input
//                 id="wd-search-assignment"
//                 className="form-control me-3"
//                 placeholder="Search for Assignments"
//                 style={{ width: "300px" }}
//             />
//             <div>
//                 <button className="btn btn-danger" onClick={handleNewAssignment}>
//                     <FaPlus /> Assignment
//                 </button>
//             </div>
//         </div>
//     );
// }



import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControls(
) {
    return (
        <div>
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )

}