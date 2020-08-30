import React from 'react'
import { highlightMessageProps } from '../../types/conversationState'

export function HighlightMessage(props:highlightMessageProps){

    const {message,searchText}=props
   if(searchText.length!==0 && message.indexOf(searchText)!==-1){
    return (
        <p style={{backgroundColor:"yellow"}}>{message}</p>
        )
   }
   else{
    return (
        <p>{message}</p>
        )
   }
    
}
export default HighlightMessage