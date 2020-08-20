import { messageData } from "../../types/conversationState"

export const sendMessage=(message:string)=>(dispatch:Function)=>{
    const messageDetails:messageData={
        isReceived:false,
        message:message
    }
dispatch({type:'conversation/sendMessage',payload:messageDetails})
}
