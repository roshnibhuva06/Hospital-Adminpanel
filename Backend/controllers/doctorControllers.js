import Doctor from "../models/doctorModel.js";

/* ADD DOCTOR */
export const addDoctor = async (req, res) => {
  try {
    const { name, specialization, phone } = req.body;

    if (!name || !specialization || !phone) {
      return res.json({ status: false, message: "All fields required" });
    }

    const doctor = await Doctor.create({ name, specialization, phone });

    res.json({ status: true, message: "Doctor Added", doctor });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};


/* GET ALL DOCTORS */
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json({ status: true, doctors });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};


/* GET SINGLE DOCTOR */
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.json({ status: true, doctor });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};


/* UPDATE DOCTOR */
export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ status: true, message: "Doctor Updated", doctor });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};


/* DELETE DOCTOR */
export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);

    res.json({ status: true, message: "Doctor Deleted" });

  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
