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
// app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://talent-iq-khaki.vercel.app",
      "https://talent-iq-git-main-milankhanchi-4316s-projects.vercel.app"
    ],
    credentials: true
  }));

app.use("/api/auth", authRoutes)

app.get("/",(req,res)=>{
    console.log("Root endpoint hit");
    res.status(200).json({msg:"success   from api"})
})

app.get("/api/health",(req,res)=>{
    console.log("Health endpoint hit");
    res.status(200).json({status:"ok",timestamp:new Date().toISOString()})
})

const startServer=async()=>{
    try{
        console.log("Starting server...");
        console.log("Environment:", ENV.NODE_ENV);
        console.log("Port:", ENV.PORT);
        console.log("Client URL:", ENV.CLIENT_URL);
        
        await connectDB();
        console.log("Database connected successfully");
        
        // Add small delay to ensure everything is ready
        setTimeout(() => {
            app.listen(ENV.PORT,()=>{
                console.log("Server is listening on port ",ENV.PORT)
                console.log("Health check available at / and /api/health")
            })
        }, 2000);

    }catch(error){
        console.error("Error starting server:",error);
        process.exit(1);
    }
}
startServer()