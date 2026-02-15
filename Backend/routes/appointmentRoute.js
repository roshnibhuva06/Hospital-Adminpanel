import express from "express";
import {
  createAppointment,
  getAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);
router.get("/:id", getSingleAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
