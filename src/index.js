// require('dotenv').config({path : './env'})
import dotenv from "dotenv"
dotenv.config({path:'./env'})

import connectDB from "./db/index.js";
connectDB()






/*
import express from "express";
const app = express();
;(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error)=>{
            console.log("ERROR: " , error)
            throw error
        })

        app.listen(process.env.PORT || 8000 , ()=>{
            console.log("app is listening on port" + process.env.PORT || 8000)
        })
    } catch (error) {
        console.error("ERROR: " , error)
        throw error
    }
})()
 */