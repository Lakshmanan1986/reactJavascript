import { useEffect, useState } from "react";
import {
    createEmployee,
    updateEmployee
} from "../services/employeeService";

function EmployeeForm({ selectedEmployee, refreshEmployees, clearSelection }) {

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        gender: "",
        address: ""
    });

    useEffect(() => {

        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        } else {
            setEmployee({
                name: "",
                age: "",
                gender: "",
                address: ""
            });
        }

    }, [selectedEmployee]);

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (selectedEmployee) {

            await updateEmployee(selectedEmployee.id, employee);

        } else {

            await createEmployee(employee);

        }

        refreshEmployees();

        clearSelection();

        setEmployee({
            name: "",
            age: "",
            gender: "",
            address: ""
        });

    };

    return (

        <div className="card mt-3">

            <div className="card-header">

                <h4>
                    {selectedEmployee ? "Edit Employee" : "Add Employee"}
                </h4>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            name="name1"
                            placeholder="Name"
                            value={employee.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={employee.age}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <select
                            className="form-select"
                            name="gender"
                            value={employee.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>

                    <div className="mb-3">

                        <textarea
                            className="form-control"
                            name="address"
                            placeholder="Address"
                            value={employee.address}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        {selectedEmployee ? "Update" : "Save"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={clearSelection}
                    >
                        Cancel
                    </button>

                </form>

            </div>

        </div>

    );

}

export default EmployeeForm;

//function EmployeeForm() {
//  return (
//    <p>Hello world!</p>
//  );
//}

//export default EmployeeForm;