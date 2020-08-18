
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {createMessageProps} from '../../../types/conversationState'
export function CreateMessage(props:createMessageProps){
    const [message,setMessage]=useState('')
    const {sendMessage}=props
    return(
        <div className="p-grid">
           <div className="p-col"> <InputTextarea value={message} onChange={(e)=>setMessage((e.target as HTMLInputElement).value)} /></div>
           <div className="p-col"> <Button label="Send" onClick={()=>{sendMessage(message);setMessage('')}}/></div>
        </div>
    )
}
export default CreateMessage