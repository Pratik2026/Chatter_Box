import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./DB/connect_db.js";
import colors from "colors";

// Config dotenv 
config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());


// Connect to DB
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`.green.bold)
});