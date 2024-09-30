import express from "express";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRouter.js";

//app config
const app = express();
const port = 3000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})