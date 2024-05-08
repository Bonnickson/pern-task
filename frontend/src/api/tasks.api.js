import axios from "./axios";

export const getAllTasksRequest = () => axios.get("/tasks");

export const createTasksRequest = (task) => axios.post("/tasks", task);

export const deteleTasksRequest = (id) => axios.delete(`/tasks/${id}`);

export const getTasksRequest = (id) => axios.get(`/tasks/${id}`);

export const updateTasksRequest = (id, task) => axios.put(`/tasks/${id}`, task);
