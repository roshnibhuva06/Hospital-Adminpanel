import React, { useState } from "react";
import "../css/patients.css";

export default function Patients({ patients = [], setPatients }) {

  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editPatient, setEditPatient] = useState(null);
  const [addPatientModal, setAddPatientModal] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    disease: "",
    phone: ""
  });

  /* ===== ADD ===== */
  const saveNewPatient = () => {

    if (!newPatient.name.trim() || !newPatient.age) {
      alert("Please fill required fields");
      return;
    }

    const patient = {
      id: Date.now(),
      ...newPatient
    };

    setPatients(prev => [...prev, patient]);

    setNewPatient({
      name: "",
      age: "",
      disease: "",
      phone: ""
    });

    setAddPatientModal(false);
  };

  /* ===== DELETE ===== */
  const deletePatient = (id) => {
    setPatients(prev => prev.filter(p => p.id !== id));
  };

  /* ===== EDIT SAVE ===== */
  const saveEdit = () => {
    if (!editPatient) return;

    setPatients(prev =>
      prev.map(p => p.id === editPatient.id ? editPatient : p)
    );

    setEditPatient(null);
  };

  /* ===== SEARCH ===== */
  const filteredPatients = patients.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patient-page">

      <div className="patient-header">
        <h2>Patients Management</h2>
        <button className="add-btn" onClick={() => setAddPatientModal(true)}>
          + Add Patient
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Patient..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.disease}</td>
                <td>{patient.phone}</td>
                <td>
                  <button onClick={() => setSelectedPatient(patient)}>View</button>
                  <button onClick={() => setEditPatient(patient)}>Edit</button>
                  <button onClick={() => deletePatient(patient.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Patients Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ADD MODAL */}
      {addPatientModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Patient</h3>

            <input
              placeholder="Name"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Age"
              value={newPatient.age}
              onChange={(e) =>
                setNewPatient({ ...newPatient, age: e.target.value })
              }
            />

            <input
              placeholder="Disease"
              value={newPatient.disease}
              onChange={(e) =>
                setNewPatient({ ...newPatient, disease: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              value={newPatient.phone}
              onChange={(e) =>
                setNewPatient({ ...newPatient, phone: e.target.value })
              }
            />

            <button onClick={saveNewPatient}>Save</button>
            <button onClick={() => setAddPatientModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* VIEW */}
      {selectedPatient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Patient Details</h3>
            <p><b>Name:</b> {selectedPatient.name}</p>
            <p><b>Age:</b> {selectedPatient.age}</p>
            <p><b>Disease:</b> {selectedPatient.disease}</p>
            <p><b>Phone:</b> {selectedPatient.phone}</p>
            <button onClick={() => setSelectedPatient(null)}>Close</button>
          </div>
        </div>
      )}

      {/* EDIT */}
      {editPatient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Patient</h3>

            <input
              value={editPatient.name}
              onChange={(e) =>
                setEditPatient({ ...editPatient, name: e.target.value })
              }
            />

            <input
              type="number"
              value={editPatient.age}
              onChange={(e) =>
                setEditPatient({ ...editPatient, age: e.target.value })
              }
            />

            <input
              value={editPatient.disease}
              onChange={(e) =>
                setEditPatient({ ...editPatient, disease: e.target.value })
              }
            />

            <input
              value={editPatient.phone}
              onChange={(e) =>
                setEditPatient({ ...editPatient, phone: e.target.value })
              }
            />

            <button onClick={saveEdit}>Save</button>
            <button onClick={() => setEditPatient(null)}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
}
