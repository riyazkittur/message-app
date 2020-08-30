import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {conversationState, messageData} from '../../types/conversationState'
import { RootState } from '../store'

const initialState:conversationState={
        messages:[]
}
const conversationSlice=createSlice({
    name:'conversation',
    initialState,
    reducers:{
loadMessages:(state,action:PayloadAction<messageData[]>)=>{
    state.messages=action.payload
},
sendMessage:(state,action:PayloadAction<messageData>)=>{
    if(action.payload!==null && action.payload.message.length!==0)
    state.messages=[...state.messages,action.payload]
}
    }
})
export const getConversation=(state:RootState)=>state?.conversation||[]
export default conversationSlice.reducer;