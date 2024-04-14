import { genSaltSync, hashSync } from "bcryptjs"
import { SuccessResponseType } from "../types/responseType"
import { Request, Response } from "express"
import user from "../models/user"

const updateUserById =async (req : Request , res : Response) => { 
    try {
        const { username, email, password, profilePicture } = req.body
        const salt = genSaltSync(10)
        const hashedPassword = hashSync(password, salt)

        const User = await user.findByIdAndUpdate(req.params.userId,{username, email, password : hashedPassword, profilePicture})
        
        const response : SuccessResponseType = {
            message : "user information are updated successfully",
            user : {userId :User!.id ,username : User!.username, email : User!.email, profilePicture : User!.profilePicture || ""}
        }
        return res.status(200).json(response)
    } catch (error) {return res.status(400).json(error)}
 }

export default updateUserById