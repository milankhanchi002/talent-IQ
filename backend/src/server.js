// const express=require("express");// purana method "type":"common.js"
 import express from "express"; // "type":"module"
//  import dotenv from "dotenv";
//  dotenv.config();
import {ENV} from "./lib/env.js"
import cors from "cors"
import { authenticateToken } from "./middleware/auth.js"

import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/auth.js"

const app=express();

app.use(express.json())
//credentials:true -> means? server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

app.use("/api/auth", authRoutes)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"success   from api"})
})

const startServer=async()=>{
    try{
        await connectDB();
        app.listen(ENV.PORT,(e)=>{
            console.log("server is listening on port ",ENV.PORT)
        })

    }catch(error){
        console.log("error starting the server",error)
    }
}
startServer()