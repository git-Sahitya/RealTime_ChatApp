import express from "express";
import dotenv from "dotenv";
import connectToDb from "./utils/db.js";
import userRoute from "./router/user.router.js";

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDb();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
