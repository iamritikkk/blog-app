import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URI).then(() => {
  console.log("db is connected !!!")
}).catch((error) => {
  console.log("error in connecting db", error)
})



app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
