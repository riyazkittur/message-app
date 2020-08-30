import axios from 'axios';
import { newMessage } from "../../types/conversationState"

export const sendMessage=(message:string)=>(dispatch:Function)=>{
    const messageDetails:newMessage={
        isReceived:false,
        message:message,
        timestamp:new Date()
    }

    const successCallback=({data}:any)=>{
        let sentMessage=data?.data
        //todo - remove the next three line as api returns the complete sent message
      sentMessage.message=messageDetails.message;
      sentMessage.isReceived=false;
        dispatch({type:'conversation/sendMessage',payload:sentMessage})
    }
const errorCallback=(errorResponse:any):void=>{
    console.log('Error in sending message====',errorResponse)
}
return axios.get('./mockData/addMessage.json')
.then((response)=>successCallback(response))
.catch((errorResponse)=>errorCallback(errorResponse))

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
