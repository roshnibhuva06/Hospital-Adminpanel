<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authroutes.js";



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);



connectDB();
app.use("/api/auth", authRouter);

app.listen(5050, () => {
  console.log("Server Started");
=======
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authroutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);



connectDB();
app.use("/api/auth", authRouter);

app.listen(5050, () => {
  console.log("Server Started");
>>>>>>> 0500f0ccfb9d4892ac395dca2a7080be08865807
});