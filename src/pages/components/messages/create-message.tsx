
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

export function CreateMessage(){
    const [message,setMessage]=useState('')
    return(
        <div className="p-grid">
           <div className="p-col"> <InputTextarea value={message} onChange={(e)=>setMessage((e.target as HTMLInputElement).value)} /></div>
           <div className="p-col"> <Button label="Send"/></div>
        </div>
    )
}
export default CreateMessage