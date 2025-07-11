import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MY_DATABASE = process.env.MY_DATABASE

app.use(express.json()) 

mongoose.connect(MY_DATABASE)
.then(()=>{console.log("Mongoose connected successfully")})
.catch((error)=>{console.error("Mongoose connection failed")})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost: ${PORT}`);
    
})  