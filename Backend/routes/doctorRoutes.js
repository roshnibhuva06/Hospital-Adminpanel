import express from "express";
import {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/addDoctor", addDoctor);
router.get("/getDoctors", getDoctors);
router.get("/getDoctor/:id", getDoctorById);
router.put("/updateDoctor/:id", updateDoctor);
router.delete("/deleteDoctor/:id", deleteDoctor);

export default router;
