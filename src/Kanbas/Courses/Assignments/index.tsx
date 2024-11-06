// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { BsGripVertical, BsPlus } from "react-icons/bs";
// import { GoTriangleDown } from "react-icons/go";
// import { useNavigate, useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import AssignmentsControls from "./AssignmentsControls";
// import { deleteAssignment } from "./reducer";
// import SectionControl from "./SectionControl";
// import {GrNotes} from "react-icons/gr";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import Button from "./Button";
//
// export default function Assignments() {
//     const { cid } = useParams();
//     const navigate = useNavigate();
//     const { assignments } = useSelector((state: any) => state.assignmentReducer);
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     return (
//         <div>
//             {}
//             <div className="wd-assignment-top text-nowrap row mt-3 mb-3">
//                 <div className="col-4 d-flex">
//                     <div className="input-group">
//                         <label htmlFor="wd-assignment-search-box" className="form-label input-group-text">
//                             <FaMagnifyingGlass />
//                         </label>
//                         <input
//                             className="input-group-text rounded-1 form-control"
//                             type="text"
//                             id="wd-assignment-search-box"
//                             placeholder="Search..."
//                         />
//                     </div>
//                 </div>
//
//                 <div className="col-8 d-flex justify-content-end align-text-end">
//                     <button className="btn btn-danger text-white rounded-1 me-1" onClick={ () => navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`) }>
//                         <BsPlus className="text-white" />
//                         Assignment
//                     </button>
//                     <button className="btn btn-secondary text-dark rounded-1 me-1">
//                         <BsPlus /> Group
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 {}
//                 <ul className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-assignment-title p-3 ps-2 bg-secondary">
//                         <BsGripVertical className="me-2 fs-3" />
//                         <GoTriangleDown />
//                         ASSIGNMENTS {/* can make this part more data driven once json format is finalized */}
//                         <SectionControl
//                             percent="100"
//                         />
//                     </div>
//                     <li className="list-group-item">
//
//                         {/* assignment list */}
//                         <ul className="wd-assignments list-group rounded-0">
//                             {assignments
//                                 .map((assignment: any) => (
//                                     <li className="wd-assignment-list-item list-group-item p-3 ps-1">
//                                         <div className="row">
//                                             <div className="col-2">
//                                                 <BsGripVertical className="me-2 fs-3" />
//                                                 <GrNotes className="me-2 fs-3 text-success" />
//                                             </div>
//                                             <div className="col-8 text-start">
//                                                 <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
//                                                     {assignment.title}
//                                                 </a>
//                                                 <p>
//                                                     Multiple Modules {}
//                                                     | <b>Not available until</b> {assignment.available_from}
//                                                     | <b>Due</b> {assignment.due_date}
//                                                     | {assignment.points}pts
//                                                 </p>
//                                             </div>
//                                             <div className="col-2">
//                                                 {currentUser.role === "FACULTY" ?
//                                                     <div className="faculty-access">
//                                                         <LessonControlButtons /></div> : <div></div>}
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                         </ul>
//                     </li>
//                 </ul>
//
//             </div>
//         </div>
//     );
// }

import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import SectionControl from "./SectionControl";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import Button from "./Button";
import DeleteAssignment from "./DeleteAssignment";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControls from "./AssignmentsControls";

export default function Assignments(
) {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div>
            {/* assignment top */}
            <div className="wd-assignment-top text-nowrap row mt-3 mb-3">
                <div className="col-4 d-flex">
                    <div className="input-group">
                        <label htmlFor="wd-assignment-search-box" className="form-label input-group-text">
                            <FaMagnifyingGlass />
                        </label>
                        <input
                            className="input-group-text rounded-1 form-control"
                            type="text"
                            id="wd-assignment-search-box"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                {currentUser.role === "FACULTY" ?
                    <div className="col-8 d-flex justify-content-end align-text-end faculty-access">
                        <button className="btn btn-danger text-white rounded-1 me-1" onClick={ () => navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`) }>
                            {<BsPlus className="text-white" />}
                            Assignment
                        </button>
                        <button className="btn btn-secondary text-dark rounded-1 me-1">
                            <BsPlus /> Group
                        </button>
                    </div>
                    : <div></div>}
            </div>
            <div>
                {/* assignment section title */}
                <ul className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignment-title p-3 ps-2 bg-secondary">
                        {currentUser.role === "FACULTY" ? <BsGripVertical className="me-2 fs-3" /> : <div></div> }
                        <GoTriangleDown />
                        ASSIGNMENTS {/* can make this part more data driven once json format is finalized */}
                        <SectionControl
                            percent="100"
                        />
                    </div>
                    <li className="list-group-item">

                        {/* assignment list */}
                        <ul className="wd-assignments list-group rounded-0">
                            {assignments
                                .filter((a:any) => (a.course === cid))
                                .map((assignment: any) => (
                                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                                        <div className="row align-items-center">
                                            <div className="col-2">
                                                { currentUser.role === "FACULTY" ?
                                                    <div className="faculty-access">
                                                        <AssignmentControls />
                                                    </div>
                                                    : <div></div>}
                                            </div>
                                            <div className="col-8 text-start">
                                                {currentUser.role === "FACULTY" ?
                                                    <div className="faculty-access">
                                                        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                            {assignment.title}
                                                        </a>
                                                    </div> : <u><b>{assignment.title}</b></u>
                                                }
                                                <p>
                                                    Multiple Modules {/* not sure what this is to be honest*/}
                                                    | <b>Not available until</b> {assignment.available_from}
                                                    | <b>Due</b> {assignment.due_date}
                                                    | {assignment.points}pts
                                                </p>
                                            </div>
                                            <div className="col-2">
                                                {currentUser.role === "FACULTY" ?
                                                    <div className="faculty-access float-end">
                                                        <AssignmentControls />
                                                        <DeleteAssignment
                                                            assignmentName={assignment.title}
                                                            assignmentId={assignment._id}
                                                            deleteAssignment={ () => dispatch(deleteAssignment(assignment._id)) }
                                                        />
                                                    </div> : <div></div>}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    );
}