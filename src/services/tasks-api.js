import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchTasks = () => {
  return service.get("/tasks").then(res => res.data);
};

export const addTask = task => {
  return service.post("/tasks", JSON.stringify(task)).then(res => res.data);
};

export const deleteTask = id => {
  return service.delete(`/tasks/${id}`).then(res => res.data);
};

export const updateTask = task => {
  return service.put(`/tasks/${task.id}`, { ...task }).then(res => res.data);
};
