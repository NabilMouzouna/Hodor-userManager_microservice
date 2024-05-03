import { Request, Response } from "express"
import user from "../models/user"
import { userType } from "../types/userType"
import { SuccessResponseType } from "../types/responseType"

const getAllUsers = async(req : Request,res : Response) => {

    const email  = req.query.email
    
    if(email){
        const User = await user.findOne({ email : email.toString()})
        if(!User) return res.status(504).json({error: "User not found, please login"})
        const response : SuccessResponseType = {
            message: "User Found",
            user: {
                userId : User.id,
                username : User.username,
                email : User.email,
                password : User.password,
                profilePicture : User.profilePicture!
            }
        }
        return res.status(200).json(response)
    }
    try {
        const users : userType[] = await user.find()

        const usersInfo = users.map(user => (
            //@ts-ignore
            {userId: user.id, 
            username: user.username, 
            email: user.email, 
            profilePicture: user.profilePicture
        }))

        const response = {
            message : "Registered users",
            users: usersInfo
        }
        return res.status(200).json(response)
    } catch (error) {return res.status(400).json(error)}
 }

 export default getAllUsers