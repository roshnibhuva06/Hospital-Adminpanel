import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  disease: {
    type: String
  },

  phone: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("Patient", patientSchema);
