import mongoose from "mongoose";

const billingSchema = new mongoose.Schema(
  {
    patient: {
      type: String,
      required: true,
    },

    treatment: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Billing", billingSchema);
