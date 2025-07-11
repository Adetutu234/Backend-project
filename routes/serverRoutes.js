import express from "express"
import User from "../model/User.js"

const userRouter = express.Router()

userRouter.get("/", async (req,res)=>{
    try{
        const users = await User.find()
        if(!users) return res.status(404).send({Error:"not found"})
        res.status(200).send(users)
    }catch(error){
        res.status(500).send({Error:error.message})
    }
})

userRouter.post("/", async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user)
    }catch (error){
        res.status(400).send({Error: error.message})
    }
})

export default userRouter