import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
name:{
    type:String,
    required:[true,"name is required"]
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    unique:true
}
},{timestamps:true})


userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,10)
})

export const User = mongoose.model("User",userSchema)
