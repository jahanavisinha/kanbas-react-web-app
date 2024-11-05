import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls"; // Ensure the correct path
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer"; // Ensure the correct path

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");

    // Access modules from Redux store
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        dispatch(addModule({ name: moduleName, course: cid }));
        setModuleName("");
    };

    const handleDeleteModule = (moduleId: string) => {
        dispatch(deleteModule(moduleId));
    };

    const handleEditModule = (moduleId: string) => {
        dispatch(editModule(moduleId));
    };

    const handleUpdateModule = (module: any) => {
        dispatch(updateModule(module));
    };

    return (
        <div className="container">
            <div className="wd-modules">
                <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
                                 addModule={() => {
                                     dispatch(addModule({ name: moduleName, course: cid }));
                                     setModuleName("");
                                 }} />

            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li
                            key={module._id}
                            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
                        >
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {!module.editing ? (
                                        <span>{module.name}</span>
                                    ) : (
                                        <input
                                            className="form-control w-50 d-inline-block"
                                            onChange={(e) =>
                                                handleUpdateModule({
                                                    ...module,
                                                    name: e.target.value,
                                                })
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleUpdateModule({
                                                        ...module,
                                                        editing: false,
                                                    });
                                                }
                                            }}
                                            defaultValue={module.name}
                                        />
                                    )}
                                </div>
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={handleDeleteModule}
                                    editModule={handleEditModule}
                                />
                            </div>

                            {/* Render lessons if they exist */}
                            {module.lessons && module.lessons.length > 0 && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li
                                            key={lesson._id}
                                            className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between"
                                        >
                                            <div className="d-flex align-items-center">
                                                <BsGripVertical className="me-2 fs-3" />
                                                <span>{lesson.name}</span>
                                            </div>
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
