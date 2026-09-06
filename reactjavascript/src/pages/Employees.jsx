import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeList";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
              <Sidebar/>
            <div className="main-content">
                  <Header/>
                <div>
                    <h3 className="fw-bold text-primary">
                        Employee Details
                    </h3>

                    <div className="row mt-4">
                        <div className="col-lg-12">

                            <div className="card dashboard-card">

                                <div className="card-body">

                                    <EmployeeTable />

                                </div>

                            </div>

                        </div>
                    </div>
                    

                </div>

            </div>

        </div>
    );
};