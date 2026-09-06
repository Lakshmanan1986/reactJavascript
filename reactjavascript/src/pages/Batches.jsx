import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BatchList from "../components/BatchList";

export default function Batch() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div>
                    <h1 className="fw-bold text-primary">
                        Batch Dashboard
                    </h1>
                </div>
                <div className="card-body">
                    <BatchList />
                </div>
            </div>
        </div>
    );
}

