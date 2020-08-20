import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {conversationState, messageData} from '../../types/conversationState'
import { RootState } from '../store'

const initialState:conversationState={
        messages:[
            {isReceived:true,message:"hello"},
            {isReceived:false,message:"hi"},
            {isReceived:false,message:"how are you?"},
            {isReceived:true,message:"I am good. How about you?"}
    
    ]
}
const conversationSlice=createSlice({
    name:'conversation',
    initialState,
    reducers:{
loadMessages:(state,action:PayloadAction<string>)=>{
    state.messages=state.messages?state.messages:[]
},
sendMessage:(state,action:PayloadAction<messageData>)=>{
    if(action.payload!==null && action.payload.message.length!==0)
    state.messages=[...state.messages,action.payload]
}
    }
})
export const getConversation=(state:RootState)=>state?.conversation||[]
export default conversationSlice.reducer;