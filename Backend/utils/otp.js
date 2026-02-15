import nodemailer from "nodemailer";
import OtpModel from "../models/otpmodels.js";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,   // must match .env
    pass: process.env.PASS,    // must be GOOGLE APP PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// transporter verify (IMPORTANT)
transport.verify(function (error, success) {
  if (error) {
    console.log("❌ Mail Server Error:", error.message);
  } else {
    console.log("✅ Mail Server Ready");
  }
});

export const sendOTP = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiry = new Date(Date.now() + 10 * 60 * 1000);

  try {
    await OtpModel.deleteMany({ email });

    await OtpModel.create({ email, otp, expiry });

    await transport.sendMail({
      from: `"Hospital Admin" <${process.env.EMAIL}>`,
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>OTP Verification</h2>
          <p>Your OTP is:</p>
          <h1 style="color:blue">${otp}</h1>
          <p>Valid for 10 minutes.</p>
        </div>
      `,
    });

    console.log("✅ OTP sent to:", email);
    return true;

  } catch (err) {
    console.error("❌ OTP send error:", err.message);
    return false;
  }
};
