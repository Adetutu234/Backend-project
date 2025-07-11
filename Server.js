import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import serverRoutes from "./routes/serverRoutes.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MY_DATABASE = process.env.MY_DATABASE

app.use(express.json()) 
app.use(cors(
    {
        origin: ["https://frontend-project-eight-rose.vercel.app/"],
        credentials: true
    }
))
app.use("api/users",serverRoutes)

mongoose.connect(MY_DATABASE)
.then(()=>{console.log("Mongoose connected successfully")})
.catch((error)=>{console.error("Mongoose connection failed",error)})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost: ${PORT}`);
})  