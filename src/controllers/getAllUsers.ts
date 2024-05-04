import { Request, Response } from "express"
import user from "../models/user"
import { userType } from "../types/userType"

const getAllUsers = async(req : Request,res : Response) => { 
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