import express from "express";
import {
  createBill,
  getBills,
  updateBill,
  deleteBill
} from "../controllers/billingController.js";

const router = express.Router();

router.post("/create", createBill);
router.get("/all", getBills);
router.put("/update/:id", updateBill);
router.delete("/delete/:id", deleteBill);

export default router;
