// const express=require("express");// purana method "type":"common.js"
 import express from "express"; // "type":"module"
//  import dotenv from "dotenv";
//  dotenv.config();
import {ENV} from "./lib/env.js"


const app=express();
app.get("/",(req,res)=>{
    res.status(200).json({msg:"success   from api"})
})

app.listen(ENV.PORT,(e)=>{
    console.log("server is listining on port ",ENV.PORT)
})