import { useEffect, useState } from "react";

import {
    getEmployees,
    deleteEmployee
} from "../services/employeeService";

import EmployeeForm from "./EmployeeForm";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [genderFilter, setGenderFilter] = useState("");

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false); // Controls form visibility

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {

        const response = await getEmployees();

        setEmployees(response.data);

    };

    const handleDelete = async (id) => {

        if (window.confirm("Delete Employee?")) {

            await deleteEmployee(id);

            loadEmployees();

        }

    };
    // Handler to start adding a new employee
    const handleAdd = () => {
        setSelectedEmployee(null);
        setShowForm(true); // Show form for new entry
    };

    // Handler to start editing an existing employee
    const handleEdit = (emp) => {
        setSelectedEmployee(emp);
        setShowForm(true); // Show form for editing
    };

    // Handler to close the form and clear selection
    const handleCloseForm = () => {
        setSelectedEmployee(null);
        setShowForm(false);
    };
    // Clear the search and filter inputs
    const handleClearFilters = () => {
        setSearchKeyword("");
        setGenderFilter("");
    };
    // Search and gender filter
    const filteredEmployees = employees.filter((emp) => {

        const keyword = searchKeyword.toLowerCase().trim();

        const matchesKeyword =
            emp.name?.toLowerCase().includes(keyword) ||
            emp.gender?.toLowerCase().includes(keyword) ||
            emp.address?.toLowerCase().includes(keyword) ||
            emp.id?.toString().includes(keyword) ||
            emp.age?.toString().includes(keyword);

        const matchesGender =
            genderFilter === "" ||
            emp.gender?.toLowerCase() === genderFilter.toLowerCase();

        return matchesKeyword && matchesGender;
    });

    return (

        <div className="container">

            <div className="d-flex justify-content-between align-items-center mb-2">
                {/* Search + Filters */}
                <div className="d-flex align-items-center">
                <input
                    className="form-control flex-grow-1"
                    placeholder="Search..."
                    style={{ maxWidth: "500px" }}
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <select
                    className="form-select ms-3"
                    style={{ maxWidth: "200px" }}
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                >
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                    onClick={handleClearFilters}
                    title="Clear filters"
                >
                    Clear
                </button>
                </div>
                {/* Add Employee */}
                <button className="btn btn-primary ms-3" onClick={handleAdd}>
                    + Add Employee
                </button>

            </div>

            <table className="table table-bordered table-striped mt-4">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th width="180">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredEmployees.map(emp => (

                        <tr key={emp.id}>

                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.address}</td>

                            <td>

                                <button
                                    className="btn btn-outline-primary btn-sm me-2"
                                    onClick={() => handleEdit(emp)}>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => handleDelete(emp.id)}>
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>
            {/*Conditionally render form based on showForm state[cite: 1] */}
            {showForm && (
                <EmployeeForm
                    selectedEmployee={selectedEmployee}
                    refreshEmployees={() => {
                        loadEmployees();
                        handleCloseForm();
                    }}
                    clearSelection={handleCloseForm}
                />
            )}
        </div>

    );

}

export default EmployeeList;
