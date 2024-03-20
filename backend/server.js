import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js" 
import messageRoutes from "./routes/message.routes.js" 
import userRoutes from "./routes/user.routes.js" 
import connectToMongoDB from "./db/connection.js";
import cors from 'cors';

const app = express();


const PORT = process.env.PORT || 5000;

dotenv.config();

// Enable CORS middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());//perse the incoming request with json payloads
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get("/",(req,res)=>{

//     res.send("Hello world!");
// })

const localIP = '192.168.8.100';


app.listen(PORT, localIP, () => {
    connectToMongoDB();
    console.log(`App listening on http://${localIP}:${PORT}!`);
});