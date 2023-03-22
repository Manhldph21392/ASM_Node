import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import productRouter from "./routers/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
mongoose.connect("mongodb://127.0.0.1:27017/test1-asm");

export const viteNodeApp = app;
