<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_uri } from "../api/api.js";
import "../css/Verifyotp.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    let newOtp = otp.split("");
    newOtp[index] = value;
    newOtp = newOtp.join("");

    setOtp(newOtp);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setToast({
        show: true,
        message: "Enter 6 digit OTP ❌",
        type: "error",
      });
      return;
    }

    try {
      const res = await axios.post(`${base_uri}/verifyOtp`, {
        email,
        otp,
      });

      if (res.data.status === true) {
        setToast({
          show: true,
          message: "OTP Verified 🎉",
          type: "success",
        });

        setTimeout(() => {
          navigate("/homepage");
        }, 1500);
      } else {
        setToast({
          show: true,
          message: res.data.message || "Invalid OTP ❌",
          type: "error",
        });
      }
    } catch (err) {
      setToast({
        show: true,
        message:
          err.response?.data?.message || "OTP Verification Failed ❌",
        type: "error",
      });
    }

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <h2>Verify OTP</h2>

        <div className="verify-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="verify-field">
          <label>Enter OTP</label>

          <div className="otp-box-container">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-box"
                value={otp[index] || ""}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
        </div>

        <button className="verify-btn" onClick={handleVerifyOtp}>
          Verify OTP
        </button>
      </div>

      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
=======
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_uri } from "../api/api.js";
import OtpInput from "otp-input-react";
import "../css/Verifyotp.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(`${base_uri}/verifyOtp`, {
        email,
        otp
      });

      if (res.data.status === true) {
        setToast({
          show: true,
          message: "OTP Verified 🎉",
          type: "success"
        });

        setTimeout(() => {
          navigate("/homepage");
        }, 1500);
      } else {
        setToast({
          show: true,
          message: res.data.message || "Invalid OTP ❌",
          type: "error"
        });
      }
    } catch (err) {
      setToast({
        show: true,
        message: err.response?.data?.message || "OTP Verification Failed ❌",
        type: "error"
      });
    }

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <h2>Verify OTP</h2>

        <div className="verify-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="verify-field">
          <label>Enter OTP</label>

          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            inputClassName="otp-input"
          />

        </div>

        <button className="verify-btn" onClick={handleVerifyOtp}>
          Verify OTP
        </button>

        {toast.show && (
          <div className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}
>>>>>>> 0500f0ccfb9d4892ac395dca2a7080be08865807
