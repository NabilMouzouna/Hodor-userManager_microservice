

/**
 * Add a user to the users array of a project.
 * @param {string} projectId - The ID of the project to which the user will be added.
 * @param {string} userId - The ID of the user to be added.
 * @returns {Promise<boolean>} A promise that resolves to true if the user was added successfully, otherwise false.
 */
export async function addUserToProject(projectId: string, userId: string): Promise<boolean> {
    try {
        // Find the project by ID and update the users array
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, {
            $addToSet: { users: userId } // Add userId to the users array if it's not already present
        }, { new: true });

        // Check if the project was found and updated
        if (!updatedProject) {
            console.error('Project not found');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error adding user to project:', error);
        return false;
    }
}
