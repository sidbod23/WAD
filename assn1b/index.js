import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db/db.js";

const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from './routes/user.routes.js'


app.use("/api", userRouter)

app.listen(3000 , () =>{
    console.log("Server is Running at PORT " , 3000);
})


