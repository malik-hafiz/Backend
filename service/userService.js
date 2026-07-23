import { User } from "../model/user.model.js"

export const createUserServices=async (userdata)=>{
    const user =await User.create(userdata)
    return user;
}
