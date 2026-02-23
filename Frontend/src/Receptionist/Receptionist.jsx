import React from "react";
import { useNavigate } from "react-router-dom";
import "./Receptionist.css";

function Receptionist() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Hospital Management System</h1>

      <div className="btn-container">
        <button
          className="btn doctor-btn"
          onClick={() => navigate("/doctor-signin")}
        >
          Doctor
        </button>

        <button
          className="btn receptionist-btn"
          onClick={() => navigate("/receptionist")}
        >
          Receptionist
        </button>
      </div>
    </div>
  );
}

export default Receptionist;
