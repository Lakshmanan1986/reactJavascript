import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Batch from "./pages/Batches";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* PUBLIC */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* PROTECTED */}
                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/batch"
                        element={<Batch />}
                    />

                    <Route
                        path="/departments"
                        element={<Departments />}
                    />

                    <Route
                        path="/employees"
                        element={<Employees />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;

