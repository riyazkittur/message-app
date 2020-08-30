
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {createMessageProps} from '../../../types/conversationState'
export function CreateMessage(props:createMessageProps){
    const [message,setMessage]=useState('')
    const {sendMessage}=props
    return(
        <div className="p-grid">
         
           <div className="p-col"> <InputTextarea rows={1} cols={100} value={message} onChange={(e)=>setMessage((e.target as HTMLInputElement).value)} autoResize /></div>
           <div className="p-col"> <Button label="Send" className="p-button-raised p-button-rounded"  onClick={()=>{sendMessage(message);setMessage('')}}/></div>
        </div>
    )
}
export default CreateMessage