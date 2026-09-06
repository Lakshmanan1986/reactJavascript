import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
    return (
        <div className="dashboard-layout">

            <aside className="sidebar-container">
                <Sidebar />
            </aside>

            <section className="main-content">

                <header className="header-container">
                    <Header />
                </header>

                <main className="page-content">
                    {children}
                </main>

            </section>

        </div>
    );
}

export default DashboardLayout;