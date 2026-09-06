import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://localhost:7104/api/employees";

export const getEmployees = () => axios.get(API_URL);

export const getEmployee = (id) =>
    axios.get(`${API_URL}/${id}`);

export const createEmployee = (employee) =>
    axios.post(API_URL, employee);

export const updateEmployee = (id, employee) =>
    axios.put(`${API_URL}/${id}`, employee);

export const deleteEmployee = (id) =>
    axios.delete(`${API_URL}/${id}`);

