import React, { useState } from "react";
import "../css/billing.css";

export default function Billing() {

  const [bills, setBills] = useState([
    { id: 1, patient: "Ramesh Patel", treatment: "Checkup", amount: 500 },
    { id: 2, patient: "Priya Shah", treatment: "Dental", amount: 1500 }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const [formData, setFormData] = useState({
    patient: "",
    treatment: "",
    amount: ""
  });

  // ===== Add Bill =====
  const addBill = () => {
    const newBill = {
      id: bills.length + 1,
      ...formData
    };

    setBills([...bills, newBill]);
    setShowForm(false);
    setFormData({ patient: "", treatment: "", amount: "" });
  };

  // ===== Delete Bill =====
  const deleteBill = (id) => {
    setBills(bills.filter(b => b.id !== id));
  };

  // ===== Save Edit =====
  const saveEdit = () => {
    setBills(
      bills.map(b => b.id === selectedBill.id ? selectedBill : b)
    );
    setSelectedBill(null);
  };

  // ===== Search Filter =====
  const filteredBills = bills.filter(b =>
    b.patient.toLowerCase().includes(search.toLowerCase())
  );

  // ===== Total Revenue =====
  const totalRevenue = bills.reduce((sum, bill) => sum + Number(bill.amount), 0);

  return (
    <div className="billing-page">

      {/* Header */}
      <div className="billing-header">
        <h2>Billing Management</h2>

        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Create Bill
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Patient..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Total Revenue */}
      <div className="total-box">
        Total Revenue : ₹ {totalRevenue}
      </div>

      {/* Table */}
      <table className="billing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Treatment</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredBills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.patient}</td>
              <td>{bill.treatment}</td>
              <td>₹ {bill.amount}</td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => alert(JSON.stringify(bill, null, 2))}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => setSelectedBill(bill)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteBill(bill.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== Add Bill Modal ===== */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Create Bill</h3>

            <input
              type="text"
              placeholder="Patient Name"
              value={formData.patient}
              onChange={(e) =>
                setFormData({ ...formData, patient: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Treatment"
              value={formData.treatment}
              onChange={(e) =>
                setFormData({ ...formData, treatment: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />

            <button className="save-btn" onClick={addBill}>
              Save
            </button>

            <button onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ===== Edit Modal ===== */}
      {selectedBill && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Bill</h3>

            <input
              type="text"
              value={selectedBill.patient}
              onChange={(e) =>
                setSelectedBill({ ...selectedBill, patient: e.target.value })
              }
            />

            <input
              type="text"
              value={selectedBill.treatment}
              onChange={(e) =>
                setSelectedBill({ ...selectedBill, treatment: e.target.value })
              }
            />

            <input
              type="number"
              value={selectedBill.amount}
              onChange={(e) =>
                setSelectedBill({ ...selectedBill, amount: e.target.value })
              }
            />

            <button className="save-btn" onClick={saveEdit}>
              Update
            </button>

            <button onClick={() => setSelectedBill(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
