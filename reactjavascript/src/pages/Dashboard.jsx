import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
              <Sidebar/>
            <div className="main-content">
                  <Header/>
                <div>
                    <h1 className="fw-bold text-primary">
                        Employee Dashboard
                    </h1>

                    <p className="text-muted">
                        Manage your employees and their information in one place.
                    </p>
                    <div className="row mt-4">
                        <div className="col-lg-12">

                            <div className="card dashboard-card">

                                <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">

                                    <h4 className="fw-bold">
                                        Employee List1
                                    </h4>

                                    <div className="d-flex">

                                        <input
                                            className="form-control me-2"
                                            placeholder="Search..."
                                        />

                                        <button className="btn btn-primary">
                                            + Add Employee
                                        </button>

                                    </div>

                                </div>

                                <div className="card-body">

                                    <EmployeeTable />

                                </div>

                            </div>

                        </div>
                        {/*<div className="col-lg-4">*/}

                        {/*    <EmployeeForm />*/}

                        {/*</div>*/}
                    </div>
                    

                </div>

            </div>

        </div>
    );
};