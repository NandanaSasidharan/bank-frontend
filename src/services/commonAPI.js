import axios from 'axios'
export const commonAPI =async (httpRequest,url,reqBody,reqHeaders)=>{
    const reqConfig = {
        method:httpRequest,//get or post
        url,//localhost:3000/register
        data:reqBody,//username,email,pass
        headers:reqHeaders? reqHeaders : {"Content-Type":"application/json"}//img
    }

//create axios instance
return await axios(reqConfig).then((response)=>{
    return response
})
.catch((err)=>{
    return err
})
}