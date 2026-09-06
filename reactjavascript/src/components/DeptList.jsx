import { useEffect, useState } from "react";

import {
    getDepartments,
    deleteDepartment
} from "../services/deptService";

import DeptForm from "./DeptForm";

function DepartmentList() {

    const [departments, setDepartments] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    const [selectedDepartment, setselectedDepartment] = useState(null);
    const [showForm, setShowForm] = useState(false); // Controls form visibility

    useEffect(() => {
        loadDepartments();
    }, []);

    const loadDepartments = async () => {

        const response = await getDepartments();

        setDepartments(response.data);

    };

    const handleDelete = async (id) => {

        if (window.confirm("Delete Employee?")) {

            await deleteDepartment(id);

            loadDepartments();

        }

    };
    // Handler to start adding a new employee
    const handleAdd = () => {
        setselectedDepartment(null);
        setShowForm(true); // Show form for new entry
    };

    // Handler to start editing an existing employee
    const handleEdit = (emp) => {
        setselectedDepartment(emp);
        setShowForm(true); // Show form for editing
    };

    // Handler to close the form and clear selection
    const handleCloseForm = () => {
        setselectedDepartment(null);
        setShowForm(false);
    };
    // Clear the search and filter inputs
    const handleClearFilters = () => {
        setSearchKeyword("");
    };

    return (

        <div className="container mt-5">
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
                    + Add Department
                </button>

            </div>
            <table className="table table-bordered table-striped mt-4">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>DeptName</th>
                        <th>Location</th>
                        <th width="180">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {departments.map(dept => (

                        <tr key={dept.id}>

                            <td>{dept.id}</td>
                            <td>{dept.deptName}</td>
                            <td>{dept.location}</td>

                            <td>

                                <button
                                    className="btn btn-outline-primary btn-sm me-2"
                                    onClick={() => handleEdit(dept)}>
                                    Edit
                                </button>

                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => handleDelete(dept.id)}>
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>
            {/*Conditionally render form based on showForm state[cite: 1] */}
            {showForm && (
            <DeptForm
                    selectedDepartment={selectedDepartment}
                    refreshEmployees={() => {
                        loadDepartments();
                        handleCloseForm();
                    }}
                    clearSelection={handleCloseForm}
            />
            )}
        </div>

    );

}

export default DepartmentList;

