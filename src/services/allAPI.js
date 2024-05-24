import { commonAPI } from "./commonAPI"
import { baseUrl } from "./baseUrl"
//actual api call
//1)register API Call
export const registerAPI =async(user)=>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}
//2 login API cell
export const loginAPI =async(user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}