import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/signin");
  };

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo-section">
        <img src="/madcare.png" alt="MadCare Logo" className="logo-img" />
      </div>

      {/* Menu */}
      <ul className="menu">

        <li onClick={() => navigate("/homepage")}>
          Dashboard
        </li>

        <li onClick={() => navigate("/doctors")}>
          Doctors
        </li>

        <li onClick={() => navigate("/patients")}>
          Patients
        </li>

        <li onClick={() => navigate("/appointments")}>
          Appointments
        </li>

        <li onClick={() => navigate("/billing")}>
          Billing
        </li>

      </ul>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

    </aside>
  );
}
