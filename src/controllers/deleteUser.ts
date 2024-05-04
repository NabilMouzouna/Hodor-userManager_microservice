import { Request, Response } from "express"
import User from "../models/user"
import { deleteUserFromProject } from "../libs/interactionWithProject"

const deleteUserById =async (req : Request,res : Response) => {
    const projectId = req.query
    if(!projectId || typeof projectId !== "string") return res.status(400).json("Invalid project")
    try {
        const user = await User.findByIdAndDelete(req.params.userId)

        // deleteing the user from the project List of users
        const deleteUserFromProjectStatus = await deleteUserFromProject(req.params.userId, projectId)
        if(!deleteUserFromProjectStatus) return res.status(501).json("Failed to delete")
        return res.status(200).json({
            message : `the user ${user?.username} was deleted successfully`,
        })
    } catch (error) {return res.status(400).json(error)}
 }

 export default deleteUserById