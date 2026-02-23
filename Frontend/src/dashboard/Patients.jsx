import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/patients.css";
import { base_uri } from "../api/api.js";

export default function Patients() {
  const [patients, setPatients] = useState([]);
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

  const fetchPatients = async () => {
    try {
      const res = await axios.get(`${base_uri}/patients`);
      setPatients(res.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);


  const saveNewPatient = async () => {
    if (!newPatient.name.trim() || !newPatient.age) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await axios.post(`${base_uri}/patients`, newPatient);
      setPatients(prev => [...prev, res.data]);
      setNewPatient({ name: "", age: "", disease: "", phone: "" });
      setAddPatientModal(false);
    } catch (err) {
      console.error("Error adding patient:", err);
    }
  };


  const deletePatient = async (id) => {
    try {
      await axios.delete(`${base_uri}/patients/${id}`);
      setPatients(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error("Error deleting patient:", err);
    }
  };


  const saveEdit = async () => {
    if (!editPatient) return;

    try {
      const res = await axios.put(
        `${base_uri}/patients/${editPatient._id}`,
        editPatient
      );

      setPatients(prev =>
        prev.map(p => (p._id === editPatient._id ? res.data : p))
      );

      setEditPatient(null);
    } catch (err) {
      console.error("Error updating patient:", err);
    }
  };


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
            filteredPatients.map((patient, index) => (
              <tr key={patient._id}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.disease}</td>
                <td>{patient.phone}</td>
                <td>
                  <button onClick={() => setSelectedPatient(patient)}>
                    View
                  </button>
                  <button onClick={() => setEditPatient(patient)}>
                    Edit
                  </button>
                  <button onClick={() => deletePatient(patient._id)}>
                    Delete
                  </button>
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

      {/* VIEW MODAL */}
      {selectedPatient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Patient Details</h3>
            <p><b>ID:</b> {selectedPatient._id}</p>
            <p><b>Name:</b> {selectedPatient.name}</p>
            <p><b>Age:</b> {selectedPatient.age}</p>
            <p><b>Disease:</b> {selectedPatient.disease}</p>
            <p><b>Phone:</b> {selectedPatient.phone}</p>
            <button onClick={() => setSelectedPatient(null)}>Close</button>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
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