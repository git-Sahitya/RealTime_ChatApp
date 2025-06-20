import express from "express";
import dotenv from "dotenv";
import connectToDb from "./utils/db.js";
import userRoute from "./router/user.router.js";
import messageRoute from "./router/message.route.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

connectToDb();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.use("/api/user", userRoute);
app.use("/api/message" , messageRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
