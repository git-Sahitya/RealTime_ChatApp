import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
