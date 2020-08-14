import {combineReducers} from 'redux'
import  conversationSlice  from './reducers/conversationSlice'

export default combineReducers({
    conversation:conversationSlice,
})