import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import dotenv from "dotenv";
dotenv.config();
import connect from "../db/mongo";

const PORT = 7000;
const app = express();


app.use(morgan(`dev`));

connect();

app.set("view engine", "pug");

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});