import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div className="app-layout">

            {/* TOP HEADER */}
            <Header />

            {/* SIDEBAR + CONTENT */}
            <div className="dashboard-layout">

                {/* LEFT SIDEBAR */}
                <aside className="sidebar-container">
                    <Sidebar />
                </aside>

                {/* RIGHT CONTENT */}
                <main className="main-content">
                    <div className="page-content">
                        <h1>Welcome to Dashboard</h1>
                    </div>
                </main>

            </div>

        </div>
    );
}

export default Home;