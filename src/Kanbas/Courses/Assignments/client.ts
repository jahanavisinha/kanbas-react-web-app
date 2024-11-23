import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:5000"; // Default to localhost if env variable is missing
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const getAssignmentsFromCourse = async (courseId: string) => {
    try {
        const { data } = await axios.get(`${ASSIGNMENT_API}/course/${courseId}`);
        return data;
    } catch (error) {
        console.error("Error fetching assignments:", error);
        throw error;
    }
};

export const createAssignment = async (assignment: object) => {
    try {
        const { data } = await axios.post(ASSIGNMENT_API, assignment);
        return data;
    } catch (error) {
        console.error("Error creating assignment:", error);
        throw error;
    }
};

export const updateAssignment = async (assignmentId: string, assignmentUpdates: object) => {
    try {
        const { data } = await axios.put(`${ASSIGNMENT_API}/${assignmentId}`, assignmentUpdates);
        return data;
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};

export const deleteAssignment = async (assignmentId: string) => {
    try {
        const { data } = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
        return data;
    } catch (error) {
        console.error("Error deleting assignment:", error);
        throw error;
    }
};
