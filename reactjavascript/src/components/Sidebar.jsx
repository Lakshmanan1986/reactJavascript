//import {
//    FaHome,
//    FaUsers,
//    FaBuilding,
//    FaChartBar,
//    FaCog
//} from "react-icons/fa";

export default function Sidebar() {

    return (

        <div className="sidebar">

            <h2 className="logo">
                EIMS
            </h2>

            <ul>

                <li className="active">
                     Dashboard
                </li>

                <li>
                     Employees
                </li>

                <li>
                     Departments
                </li>

                <li>
                    Reports
                </li>

                <li>
                     Settings
                </li>

            </ul>

        </div>

    );

}