import user from "../models/user";
import { SuccessResponseType } from "../types/responseType";
import { Request, Response } from "express";

const createUser = async (req: Request, res : Response) => { 

    const { username, email, password, profilePicture, token  } = req.body

    // Check if user with the same email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User with this email already exists" });
    
    try {
    const newUser = await user.create({ username, email, password, profilePicture, token });

      const response : SuccessResponseType = {
        message: `this user ${newUser.email} is registered`,
        user : {userId : newUser.id,username, email, profilePicture},
      }
        
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error)
      }
 }

 export default createUser