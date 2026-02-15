<<<<<<< HEAD
import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Otp", otpSchema);
=======
import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: String,
    otp: Number,
    expiry: Date,
  },
  { timestamps: true },
);

export default mongoose.model("otp", otpSchema);
>>>>>>> 0500f0ccfb9d4892ac395dca2a7080be08865807
