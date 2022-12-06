import express from "express";
import mongoose from "mongoose";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from "cors"; //security feature of browser
import bodyParser from "body-parser"; // to handle post api req (express doest nt know how to handle)

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 8000;

mongoose.set("strictQuery", true); // to solve connection issue

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
