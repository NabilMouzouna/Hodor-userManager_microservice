import { Request, Response } from "express"
import user from "../models/user"
import { SuccessResponseType } from "../types/responseType"

const getUserById = async (req : Request,res : Response) => { 
    try {
        const User = await user.findById(req.params.userId)
        const response : SuccessResponseType = {
            message : "user was found in the database",
            user : {userId : User!.id,username : User!.username, email : User!.email, profilePicture : User!.profilePicture || ""}
        }
        return res.status(200).json(response)
    } catch (error) {return res.status(400).json(error)}
 }

export default getUserById