import { Schema,model } from "mongoose";

const userSchema = new Schema({
    name: String,
    postion: String,
    department: String,
    userId: Number
})

const User = model("User",userSchema)

export default User