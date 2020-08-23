import axios from 'axios';
import { newMessage } from "../../types/conversationState"

export const sendMessage=(message:string)=>(dispatch:Function)=>{
    const messageDetails:newMessage={
        isReceived:false,
        message:message,
        timestamp:new Date()
    }
dispatch({type:'conversation/sendMessage',payload:messageDetails})
}
export const loadMessages=()=>(dispatch:Function)=>{
    const successCallback=({data}:any)=>{
        const dataToBePassed=data?.data.messages
        dispatch({type:'conversation/loadMessages',payload:dataToBePassed})
    }
    const errorCallback=(errorResponse:any):void=>{
        console.log('Error occurred in load messages====',errorResponse)
    }
    //todo - change end point to real api
    return axios.get('./mockData/messages.json')
    .then((response)=>successCallback(response))
    .catch((errorResponse)=>errorCallback(errorResponse))

}
