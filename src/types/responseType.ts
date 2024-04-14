import { userType } from "./userType";


export type SuccessResponseType = {
    message : string,
    user : userType,
    accessToken? : string
}