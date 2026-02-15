import React, { useState } from "react";
import "../css/appointment.css";

export default function Appointment() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Ramesh Patel",
      doctor: "Dr. Rahul Sharma",
      date: "2026-02-20",
      time: "10:30 AM",
      status: "Confirmed"
    }
  ]);

  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending"
  });

  /* ================= ADD ================= */
  const addAppointment = () => {
    const newAppointment = {
      id: appointments.length + 1,
      ...form
    };

    setAppointments([...appointments, newAppointment]);

    setForm({
      patient: "",
      doctor: "",
      date: "",
      time: "",
      status: "Pending"
    });

    setShowAdd(false);
  };

  /* ================= DELETE ================= */
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  /* ================= SAVE EDIT ================= */
  const saveEdit = () => {
    setAppointments(
      appointments.map(a =>
        a.id === editData.id ? editData : a
      )
    );
    setEditData(null);
  };

  /* ================= SEARCH ================= */
  const filteredAppointments = appointments.filter(a =>
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="appointment-page">

      {/* Header */}
      <div className="appointment-header">
        <h2>Appointments Management</h2>

        <button className="add-btn" onClick={() => setShowAdd(true)}>
          + Add Appointment
        </button>
      </div>

      {/* Search */}
      <input
        className="search-box"
        type="text"
        placeholder="Search Patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="appointment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAppointments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.patient}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.status}</td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => setViewData(a)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => setEditData(a)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteAppointment(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================= ADD MODAL ================= */}
      {showAdd && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Appointment</h3>

            <input
              placeholder="Patient Name"
              value={form.patient}
              onChange={(e) =>
                setForm({ ...form, patient: e.target.value })
              }
            />

            <input
              placeholder="Doctor Name"
              value={form.doctor}
              onChange={(e) =>
                setForm({ ...form, doctor: e.target.value })
              }
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <input
              placeholder="Time"
              value={form.time}
              onChange={(e) =>
                setForm({ ...form, time: e.target.value })
              }
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
            </select>

            <button className="save-btn" onClick={addAppointment}>
              Save
            </button>

            <button onClick={() => setShowAdd(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ================= VIEW MODAL ================= */}
      {viewData && (
        <div className="modal">
          <div className="modal-content">
            <h3>Appointment Details</h3>

            <p><b>Patient:</b> {viewData.patient}</p>
            <p><b>Doctor:</b> {viewData.doctor}</p>
            <p><b>Date:</b> {viewData.date}</p>
            <p><b>Time:</b> {viewData.time}</p>
            <p><b>Status:</b> {viewData.status}</p>

            <button onClick={() => setViewData(null)}>Close</button>
          </div>
        </div>
      )}

      {/* ================= EDIT MODAL ================= */}
      {editData && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Appointment</h3>

            <input
              value={editData.patient}
              onChange={(e) =>
                setEditData({ ...editData, patient: e.target.value })
              }
            />

            <input
              value={editData.doctor}
              onChange={(e) =>
                setEditData({ ...editData, doctor: e.target.value })
              }
            />

            <input
              type="date"
              value={editData.date}
              onChange={(e) =>
                setEditData({ ...editData, date: e.target.value })
              }
            />

            <input
              value={editData.time}
              onChange={(e) =>
                setEditData({ ...editData, time: e.target.value })
              }
            />

            <select
              value={editData.status}
              onChange={(e) =>
                setEditData({ ...editData, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
            </select>

            <button className="save-btn" onClick={saveEdit}>
              Save
            </button>

            <button onClick={() => setEditData(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
