import { Request, Response } from "express"
import User from "../models/user"

const deleteUserById =async (req : Request,res : Response) => { 
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
        return res.status(200).json({
            message : `the user ${user?.username} was deleted successfully`,
        })
    } catch (error) {return res.status(400).json(error)}
 }

 export default deleteUserById