import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://localhost:7104/api/dept";

export const getDepartments = () => axios.get(API_URL);

export const getDepartment = (id) =>
    axios.get(`${API_URL}/${id}`);

export const createDepartment = (department) =>
    axios.post(API_URL, department);

export const updateDepartment = (id, department) =>
    axios.put(`${API_URL}/${id}`, department);

export const deleteDepartment = (id) =>
    axios.delete(`${API_URL}/${id}`);