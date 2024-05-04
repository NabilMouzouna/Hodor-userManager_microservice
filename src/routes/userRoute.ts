//!TODO: this Route must be Protected

import { Router } from "express"
import deleteUserById from "../controllers/deleteUser"
import createUser from "../controllers/createUser"
import getAllUsers from "../controllers/getAllUsers"
import updateUserById from "../controllers/updateUser"

const router = Router()

// Get user by id
router.get('/:userId',getAllUsers)

// Update user selected by id
router.put('/:userId',updateUserById)

// Delete user selected by id (for developers only)
router.delete('/:userId',deleteUserById)

// Get All users
router.get('/',getAllUsers)

// Create a new user
router.post('/',createUser)

export default router