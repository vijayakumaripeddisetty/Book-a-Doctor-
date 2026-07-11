import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// Public Pages
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

// User Pages
import UserHome from "./pages/UserHome";
import UserAppointments from "./pages/UserAppointments";
import ApplyDoctor from "./pages/ApplyDoctor";

// Admin Pages
import AdminHome from "./pages/AdminHome";

// Shared Components
import Footer from "./components/Footer";

// ----------------------
// Private Route Component
// ----------------------

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userData"));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// ----------------------
// Admin Route
// ----------------------

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userData"));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.type !== "admin") {
    return <Navigate to="/userhome" replace />;
  }

  return children;
};

// ----------------------
// User Route
// ----------------------

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userData"));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.type !== "user") {
    return <Navigate to="/adminhome" replace />;
  }

  return children;
};

// ----------------------
// Main App
// ----------------------

function App() {
  const isAuthenticated =
    !!localStorage.getItem("token") &&
    !!localStorage.getItem("userData");

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Routes>

          {/* Public Routes */}

          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate
                  to={
                    JSON.parse(localStorage.getItem("userData")).type ===
                    "admin"
                      ? "/adminhome"
                      : "/userhome"
                  }
                />
              ) : (
                <Home />
              )
            }
          />

          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate
                  to={
                    JSON.parse(localStorage.getItem("userData")).type ===
                    "admin"
                      ? "/adminhome"
                      : "/userhome"
                  }
                />
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate
                  to={
                    JSON.parse(localStorage.getItem("userData")).type ===
                    "admin"
                      ? "/adminhome"
                      : "/userhome"
                  }
                />
              ) : (
                <Register />
              )
            }
          />

          {/* User Routes */}

          <Route
            path="/userhome"
            element={
              <UserRoute>
                <UserHome />
              </UserRoute>
            }
          />

          <Route
            path="/userappointments/:doctorId"
            element={
              <UserRoute>
                <UserAppointments />
              </UserRoute>
            }
          />

          <Route
            path="/applydoctor"
            element={
              <UserRoute>
                <ApplyDoctor />
              </UserRoute>
            }
          />

          {/* Admin Routes */}

          <Route
            path="/adminhome"
            element={
              <AdminRoute>
                <AdminHome />
              </AdminRoute>
            }
          />

          {/* Unknown Route */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer */}

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
