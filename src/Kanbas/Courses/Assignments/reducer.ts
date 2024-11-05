import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
    assignments: db.assignments,
};

export type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
};

export type AssignmentsState = {
    assignments: Assignment[];
};

export const addAssignment = (assignment: Assignment) => ({
    type: "add-assignment",
    assignment,
});

export const deleteAssignment = (assignmentId: string) => ({
    type: "delete-assignment",
    assignmentId,
});

export const updateAssignment = (assignment: Assignment) => ({
    type: "update-assignment",
    assignment,
});

const assignmentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "add-assignment":
            return {
                ...state,
                assignments: [...state.assignments, action.assignment],
            };

        case "delete-assignment":
            return {
                ...state,
                assignments: state.assignments.filter(
                    (assignment) => assignment._id !== action.assignmentId
                ),
            };

        case "update-assignment":
            return {
                ...state,
                assignments: state.assignments.map((assignment) =>
                    assignment._id === action.assignment._id ? action.assignment : assignment
                ),
            };

        default:
            return state;
    }
};

export default assignmentsReducer;