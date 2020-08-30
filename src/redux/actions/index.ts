import axios from 'axios';
import { newMessage } from "../../types/conversationState"

export const sendMessage=(message:string)=>async (dispatch:Function)=>{
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
    try {
        const response = await axios.get('./mockData/addMessage.json');
        return successCallback(response);
    }
    catch (errorResponse_2) {
        return errorCallback(errorResponse_2);
    }

}
export const loadMessages=()=>async (dispatch:Function)=>{
    const successCallback=({data}:any)=>{
        const dataToBePassed=data?.data.messages
        dispatch({type:'conversation/loadMessages',payload:dataToBePassed})
    }
    const errorCallback=(errorResponse:any):void=>{
        console.log('Error occurred in load messages====',errorResponse)
    }
    //todo - change end point to real api
    try {
        const response = await axios.get('./mockData/messages.json');
        return successCallback(response);
    }
    catch (errorResponse_2) {
        return errorCallback(errorResponse_2);
    }

}

