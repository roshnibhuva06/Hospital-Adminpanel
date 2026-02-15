<<<<<<< HEAD
import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
    },
  },
  { timestamps: true },
);

=======
import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
    },
  },
  { timestamps: true },
);

>>>>>>> 0500f0ccfb9d4892ac395dca2a7080be08865807
export default mongoose.model("auth", authSchema);