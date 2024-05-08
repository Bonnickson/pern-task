import { createContext, useState, useContext } from "react";
import {
    getAllTasksRequest,
    deteleTasksRequest,
    createTasksRequest,
    getTasksRequest,
    updateTasksRequest,
} from "../api/tasks.api";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error(
            "useTasks debe estar dentro del proveedor TaskProvider"
        );
    }
    return context;
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [errors, setErrors] = useState([]);

    const loadTasks = async () => {
        const res = await getAllTasksRequest();
        setTasks(res.data);
    };

    const loadTask = async (id) => {
        const res = await getTasksRequest(id);
        return res.data;
    };

    const createTask = async (task) => {
        try {
            const res = await createTasksRequest(task);
            setTasks([...tasks, res.data]);
            return res.data;
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.message]);
            }
        }
    };

    const deleteTasks = async (id) => {
        const res = await deteleTasksRequest(id);
        if (res.status === 204) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
        console.log(res);
    };

    const updateTask = async (id, task) => {
        try {
            const res = await updateTasksRequest(id, task);
            return res.data;
        } catch (error) {
            if (error.response) {
                setErrors([error.response.data.message]);
            }
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loadTasks,
                deleteTasks,
                createTask,
                loadTask,
                errors,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
