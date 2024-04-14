import axios from "axios";
import user from "../models/user";
import { SuccessResponseType } from "../types/responseType";
import { Request, Response } from "express";

const projectId = "661b17adef4a593cad14a2cb"
const createUser = async (req: Request, res : Response) => { 

    const { username, email, password, profilePicture, token  } = req.body

    // Check if user with the same email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User with this email already exists" });

    const newUser = await user.create({ username, email, password, profilePicture, token });
    try {
      // Updating the Project Users list in the database
      const addToProjectList = await axios.put(`${process.env.PROJECT_MANAGER_URL!}/projects/${projectId}`, { newUser });

      const response : SuccessResponseType = {
        message: `this user ${newUser.email} is registered and saved to Project users list`,
        user : {userId : newUser.id,username, email, profilePicture},
      }
      if(addToProjectList.status !== 200){
        response.message = "this user ${newUser.email} is registered but not saved to Project users list"
      }
        
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error)
      }
 }

 export default createUser