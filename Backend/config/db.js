<<<<<<< HEAD
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Mongo URI =>", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};
=======
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Mongo URI =>", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};
>>>>>>> 0500f0ccfb9d4892ac395dca2a7080be08865807
