import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev", "start"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(`Running on PORT ${PORT}`);
  res.json("UwU");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const { name, cedula, email, tel, password, department } = req.body;
  res.json("UwU");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
