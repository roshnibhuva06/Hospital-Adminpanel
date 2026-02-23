import Appointment from "../models/appointmentModel.js";


export const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSingleAppointment = async (req, res) => {
  try {
    const data = await Appointment.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateAppointment = async (req, res) => {
  try {
    const data = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
