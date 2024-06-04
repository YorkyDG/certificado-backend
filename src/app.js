import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev", "start"));
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.get("/", (req, res) => {
  console.log(`Running on PORT ${PORT}`);
  res.json("UwU");
});


app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
