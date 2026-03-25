// const express=require("express");// purana method "type":"common.js"
 import express from "express"; // "type":"module"
//  import dotenv from "dotenv";
//  dotenv.config();
import path from "path"
import {ENV} from "./lib/env.js"

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
app.listen(ENV.PORT,(e)=>{
    console.log("server is listining on port ",ENV.PORT)
})