import express from "express";
import morgan from "morgan";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev", "start"));
app.use(express.json());


app.get("/", (req, res) =>{
    res.json("UwU")
})

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
