import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import Transactions from "./routes/transactions.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/transactions", Transactions);

const PORT = process.env.PORT || 6000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
