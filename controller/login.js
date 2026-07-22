import bcrypt from "bcrypt"
import { User } from "../model/user.model.js";
export const login = async(req , res) =>{
    try{
        const {email , password} = req.body;
        if(!email || !password){
            res.status(401).json({success:false , message :"all fields are required"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({success:false , message: "invalid email or password"})
        }

        const matchPassword =  await bcrypt.compare(password , user.password)
        
        if(!matchPassword){
            res.status(400).json({success:false , message: " password does not match"})
            
        }
        res.status(200).json({success:true , message:"User login successfully",data:user})
        

    }catch(error){
    res.status(401).json({success:false , message:error.message})
    }

}