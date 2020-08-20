
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {createMessageProps} from '../../../types/conversationState'
export function CreateMessage(props:createMessageProps){
    const [message,setMessage]=useState('')
    const {sendMessage}=props
    return(
        <div className="p-grid">
            <div className="p-col-2"></div>
           <div className="p-col-8"> <InputTextarea rows={1} cols={75} value={message} onChange={(e)=>setMessage((e.target as HTMLInputElement).value)} /></div>
           <div className="p-col-1"> <Button label="Send" className="p-button-raised p-button-rounded"  onClick={()=>{sendMessage(message);setMessage('')}}/></div>
        </div>
    )
}
export default CreateMessage