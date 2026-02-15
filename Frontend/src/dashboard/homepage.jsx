import React from "react";
import Sidebar from "./sidebar";
import "../css/homepage.css";

export default function Dashboard({ patients = [] }) {

  // Last 3 Patients
  const lastPatients = patients.slice(-3).reverse();

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h2>Dashboard</h2>
            <p>{new Date().toDateString()}</p>
          </div>

          <div className="header-btns">
            <button className="history-btn">Appointment History</button>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner">
          <div>
            <h3>Welcome, Doctor</h3>
            <p>Have a nice day at work</p>
          </div>
        </div>

        {/* Report Cards */}
        <h3 className="section-title">Report</h3>

        <div className="report-container">

          {/* 🔥 Dynamic Patient Count */}
          <div className="report-card">
            <h4>Total Patients</h4>
            <p>{patients.length}</p>
          </div>

          <div className="report-card">
            <h4>Consultation</h4>
            <p>207</p>
          </div>

          <div className="report-card">
            <h4>Inject</h4>
            <p>128</p>
          </div>

          <div className="report-card">
            <h4>Surgery</h4>
            <p>48</p>
          </div>

          <div className="report-card add-card">+</div>

        </div>

        {/* Calendar Section */}
        <div className="calendar-box">
          <h3>
            {new Date().toLocaleString("default", {
              month: "long",
              year: "numeric"
            })}
          </h3>

          <div className="calendar-events">
            <div className="event blue">Check Up</div>
            <div className="event pink">Surgery</div>
            <div className="event cyan">Consultation</div>
          </div>
        </div>

      </main>

      {/* Right Profile Panel */}
      <aside className="profile-panel">

        <h3>My Profile</h3>

        <div className="profile-card">
          <img src="https://i.pravatar.cc/100" alt="profile" />
          <h4>Doctor</h4>
        </div>

        <h4 className="patient-title">Last Patients</h4>

        <div className="patient-list">
          {lastPatients.length > 0 ? (
            lastPatients.map((patient) => (
              <p key={patient.id}>👤 {patient.name}</p>
            ))
          ) : (
            <p>No patients yet</p>
          )}
        </div>

        <div className="chart-box">
          <h4>Number of Patients</h4>
          <p className="chart-number">{patients.length}</p>
        </div>

      </aside>
    </div>
  );
}

