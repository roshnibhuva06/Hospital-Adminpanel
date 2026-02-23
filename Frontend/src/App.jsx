import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from "./dashboard/Signup.jsx";
import Signin from "./dashboard/Signin.jsx";
import VerifyOtp from "./dashboard/VerifyOtp.jsx";
import Homepage from "./dashboard/homepage.jsx";
import Doctor from "./dashboard/doctor.jsx";
import Patients from "./dashboard/Patients.jsx";
import Appointments from "./dashboard/Appointments.jsx";
import Billing from "./dashboard/billing.jsx";
import Receptionist from "./Receptionist/Receptionist.jsx";

import "./App.css";

function App() {

  // ✅ GLOBAL PATIENT STATE
  const [patients, setPatients] = useState([]);

  return (
    <Routes>

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/signin" />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/receptionist" element={<Receptionist />} />

      {/* ✅ PATIENTS WITH PROPS */}
      <Route 
        path="/patients" 
        element={
          <Patients 
            patients={patients}
            setPatients={setPatients}
          />
        } 
      />

      <Route path="/appointments" element={<Appointments />} />
      <Route path="/billing" element={<Billing />} />

    </Routes>
  );
}

export default App;
