import { useEffect, useState } from "react";
import {
    createDepartment,
    updateDepartment
} from "../services/deptService";

function DepartmentForm({ selectedDepartment, refreshDepartments, clearSelection }) {

    const [department, setDepartment] = useState({
        deptname: "",
        location: "",
    });

    useEffect(() => {

        if (selectedDepartment) {
            setDepartment(selectedDepartment);
        } else {
            setDepartment({
                deptname: "",
                location: ""
            });
        }

    }, [selectedDepartment]);

    const handleChange = (e) => {

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (selectedDepartment) {

            await updateDepartment(selectedDepartment.id, department);

        } else {

            await createDepartment(department);

        }

        refreshDepartments();

        clearSelection();

        setDepartment({
            deptname: "",
            location: ""
        });

    };

    return (

        <div className="card mt-3">

            <div className="card-header">

                <h4>
                    {selectedDepartment ? "Edit Department" : "Add Department"}
                </h4>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            name="deptname"
                            placeholder="Department Name"
                            value={department.deptname}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            type="number"
                            name="location"
                            placeholder="Location"
                            value={department.location}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        {selectedDepartment ? "Update" : "Save"}
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

export default DepartmentForm;
