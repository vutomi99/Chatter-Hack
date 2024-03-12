import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js" 
import messageRoutes from "./routes/message.routes.js" 
import connectToMongoDB from "./db/connection.js";

const app = express();


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//perse the incoming request with json payloads
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

// app.get("/",(req,res)=>{

//     res.send("Hello world!");
// })

const localIP = '192.168.8.103';


app.listen(process.env.PORT,localIP,()=>{

    connectToMongoDB();
    console.log(`App listening on http://${localIP}:${process.env.PORT}!`);

});