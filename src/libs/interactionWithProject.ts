import axios from "axios";

export async function addUserToProject(userId : string, projectId : string){
    const response = await axios.post(`${process.env.PROJECT_MANAGER_URL}/projects/${projectId}/users?`, { userId })
    if(response.status !== 200) return undefined
    return response.data
}

export async function deleteUserFromProject(userId : string, projectId : string) {
    const response = await axios.delete(`${process.env.PROJECT_MANAGER_URL}/projects/${projectId}/users?userId=${userId}`)
    if(response.status !== 200) return undefined
    return response.data
}