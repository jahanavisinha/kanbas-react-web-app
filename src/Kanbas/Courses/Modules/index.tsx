// export default function Modules() {
//     return (
//         <div>
//             {/* Implement Collapse All button, View Progress button, etc. */}
//             <button>Collapse All</button>
//             <button>View Progress</button>
//             <select id="wd-select-one-publish">
//                 <option value="Publish all">Publush all</option>
//                 <option value="Publish none">Publish none</option>
//                 <option selected value="Publish all">
//                     Publish all
//                 </option>
//                 <option value="Publish one">Publish one</option>
//             </select>
//             <button>+Module</button>
//             <ul id="wd-modules">
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 1- Course Introduction, Syllabus,
//                         Agenda
//                     </div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to the course</li>
//                                 <li className="wd-content-item">Learn what is Web Development</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">READING</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 1 -
//                                     Introduction
//                                 </li>
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 2 -
//                                     Creating User
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to Web Development
//                                 </li>
//                                 <li className="wd-content-item">Creating an HTTP server with Node.js
//                                 </li>
//                                 <li className="wd-content-item">Creating a React Application
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML
//                     </div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Learn how to creae user interfaces with HTML</li>
//                                 <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to HTML and the DOM
//                                 </li>
//                                 <li className="wd-content-item">Formatting Web content with Headings
//                                 </li>
//                                 <li className="wd-content-item">Formatting content with Lists and Tables
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 2</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }


import React from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;

    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name}
                                <ModuleControlButtons />
                            </div>
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}