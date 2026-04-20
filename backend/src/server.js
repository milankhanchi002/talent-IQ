// const express=require("express");// purana method "type":"common.js"
 import express from "express"; // "type":"module"
//  import dotenv from "dotenv";
//  dotenv.config();
import path from "path"
import {ENV} from "./lib/env.js"
import {serve} from "inngest/express"
import {functions} from "./lib/inngest.js"

import {connectDB} from "./lib/db.js"

app.use(express.json())
//credentials:true -> means? server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

app.use("/api/inngest",serve({client:inngest,functions}))

const __dirname=path.resolve()
const app=express();
app.get("/",(req,res)=>{
    res.status(200).json({msg:"success   from api"})
})

//make our app ready to deployment
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));

    });
}


const startServer=async()=>{
    try{
        await connectDB();
        app.listen(ENV.PORT,(e)=>{
            console.log("server is listining on port ",ENV.PORT)
        })

    }catch(error){
        console.log("error starting the server",error)
    }
}
startServer()