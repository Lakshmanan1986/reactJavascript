import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">

            {/*<h2 className="logo">*/}
            {/*    EIMS*/}
            {/*</h2>*/}

            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>

                <li>
                    <Link to="/employees">Employees</Link>
                </li>

                <li>
                    <Link to="/departments">Departments</Link>
                </li>

                <li>
                    <Link to="/batches">Batches</Link>
                </li>

                <li>
                    <Link to="/reports">Reports</Link>
                </li>

                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

            </ul>

        </div>
    );
}

