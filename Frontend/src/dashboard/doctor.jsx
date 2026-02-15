import React, { useState } from "react";
import "../css/doctor.css";

export default function Doctors() {

  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Rahul Sharma", specialization: "Cardiologist", phone: "9876543210" },
    { id: 2, name: "Dr. Neha Patel", specialization: "Dentist", phone: "9123456780" }
  ]);

  const [search, setSearch] = useState("");

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    phone: ""
  });

  /* SEARCH FILTER */
  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  /* DELETE */
  const deleteDoctor = (id) => {
    setDoctors(doctors.filter(doc => doc.id !== id));
  };

  /* VIEW */
  const viewDoctor = (doc) => {
    setSelectedDoctor(doc);
    setShowView(true);
  };

  /* EDIT */
  const editDoctor = (doc) => {
    setSelectedDoctor(doc);
    setFormData(doc);
    setShowEdit(true);
  };

  /* SAVE EDIT */
  const saveEdit = () => {
    setDoctors(doctors.map(doc =>
      doc.id === selectedDoctor.id ? { ...formData } : doc
    ));
    setShowEdit(false);
  };

  /* ADD DOCTOR */
  const addDoctor = () => {
    const newDoctor = {
      id: doctors.length + 1,
      ...formData
    };

    setDoctors([...doctors, newDoctor]);
    setShowAdd(false);
    setFormData({ name: "", specialization: "", phone: "" });
  };

  return (
    <div className="doctor-page">

      {/* HEADER */}
      <div className="doctor-header">
        <h2>Doctors Management</h2>

        <button className="add-btn" onClick={() => setShowAdd(true)}>
          + Add Doctor
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search Doctor..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table className="doctor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredDoctors.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.specialization}</td>
              <td>{doc.phone}</td>

              <td>
                <button className="view-btn" onClick={() => viewDoctor(doc)}>
                  View
                </button>

                <button className="edit-btn" onClick={() => editDoctor(doc)}>
                  Edit
                </button>

                <button className="delete-btn" onClick={() => deleteDoctor(doc.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* VIEW MODAL */}
      {showView && (
        <div className="modal">
          <div className="modal-content">
            <h3>Doctor Details</h3>
            <p><b>Name:</b> {selectedDoctor.name}</p>
            <p><b>Specialization:</b> {selectedDoctor.specialization}</p>
            <p><b>Phone:</b> {selectedDoctor.phone}</p>

            <button onClick={() => setShowView(false)}>Close</button>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEdit && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Doctor</h3>

            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Doctor Name"
            />

            <input
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              placeholder="Specialization"
            />

            <input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone"
            />

            <button className="save-btn" onClick={saveEdit}>Save</button>
            <button onClick={() => setShowEdit(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* ADD MODAL */}
      {showAdd && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Doctor</h3>

            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Doctor Name"
            />

            <input
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              placeholder="Specialization"
            />

            <input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone"
            />

            <button className="save-btn" onClick={addDoctor}>Add</button>
            <button onClick={() => setShowAdd(false)}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
}
