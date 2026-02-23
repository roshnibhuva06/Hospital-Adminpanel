import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authroutes.js";
import router from './routes/patientsRoutes.js'

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/patients", router);

app.listen(5000, () => {
  console.log("Server Started");
});