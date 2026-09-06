import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DeptTable from "../components/DeptList";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div>
                    <h3 className="fw-bold text-primary">
                        Department Details
                    </h3>

                    <div className="row mt-4">
                        <div className="col-lg-12">

                            <div className="card dashboard-card">

                                <div className="card-body">

                                    <DeptTable />

                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};