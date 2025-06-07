import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./DB/connectDB.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); //allows us to parse incoming request with JSON payload
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is runnning on port 3000");
});
//YpcOGozp6S9PR1zd
