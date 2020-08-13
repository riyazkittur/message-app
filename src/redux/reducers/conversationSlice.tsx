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
}
    }
})
export const getConversation=(state:RootState)=>state?.conversation||[]
export default conversationSlice.reducer;