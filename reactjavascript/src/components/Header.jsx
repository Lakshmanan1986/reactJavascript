import React from "react";
import { getUser, logout } from "../services/authService";

const Header = () => {

    const user = getUser();

    return (
        <header className="d-flex justify-content-between p-3">

            <h3>Employee Management System1</h3>

            <div>

                <span className="me-3">
                    Welcome, {user?.fullName}
                </span>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </header>
    );
};

export default Header;
