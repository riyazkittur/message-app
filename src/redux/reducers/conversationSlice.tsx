import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {conversationState} from '../../types/conversationState'
import { RootState } from '../store'

const initialState:conversationState={
        messages:["hello"]
}
const conversationSlice=createSlice({
    name:'conversation',
    initialState,
    reducers:{
loadMessages:(state,action:PayloadAction<string>)=>{
    state.messages=state.messages?state.messages:[]
},
sendMessage:(state,action:PayloadAction<string>)=>{
    if(action.payload!==null && action.payload.length!==0)
    state.messages=[...state.messages,action.payload]
}
    }
})
export const getConversation=(state:RootState)=>state?.conversation||[]
export default conversationSlice.reducer;