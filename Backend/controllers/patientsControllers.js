import Patient from "../models/patientsModel.js";

// ===== GET ALL PATIENTS ===== 
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===== ADD PATIENT ===== 
export const addPatient = async (req, res) => {

  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ===== UPDATE PATIENT ===== */
export const updatePatient = async (req, res) => {

  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(patient);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ===== DELETE PATIENT ===== */
export const deletePatient = async (req, res) => {

  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient Deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
