import { useEffect, useState } from "react";

import {
    getEmployees,
    deleteEmployee
} from "../services/employeeService";

import EmployeeForm from "./EmployeeForm";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

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

    return (

        <div className="container mt-5">



            <table className="table table-bordered table-striped mt-4">

                <thead className="table-dark">

                    <tr>

                        <th>ID1</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th width="180">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map(emp => (

                        <tr key={emp.id}>

                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.address}</td>

                            <td>

                                <button
                                    className="btn btn-outline-primary btn-sm me-2"
                                    onClick={() => setSelectedEmployee(emp)}>
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

            <EmployeeForm
                selectedEmployee={selectedEmployee}
                refreshEmployees={loadEmployees}
                clearSelection={() => setSelectedEmployee(null)}
            />

        </div>

    );

}

export default EmployeeList;

//function EmployeeList() {
//  return (
//    <p>Hello world!</p>
//  );
//}

//export default EmployeeList;