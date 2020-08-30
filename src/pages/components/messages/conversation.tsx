import React,{useEffect} from 'react'
import {Card} from 'primereact/card'
import { ScrollPanel } from 'primereact/scrollpanel';
import CreateMessage from './create-message';
import { conversationProps,messageData } from '../../../types/conversationState';
import './conversation.css'
export function Conversation(props:conversationProps){
    const {messages,sendMessage,loadMessages}=props
    
    
    const stylePanel={ width: '100%', height: '400px' }
  
 
    
useEffect( ()=>{
    loadMessages()
     
      },[loadMessages]

)

const messageComponentList=messages.map((msg:messageData)=>{
    return (
        <div  className='p-col p-col-fixed message-width received' key={msg.id} >
        <Card className={msg.isReceived?'received-message':'sent-message'}>
            <p>{msg.message}
            </p>
           
        </Card>
    </div>
    )
}) 
  
    return(
        <div className="p-grid">
        <div className="p-col-3"></div>
        <div className="p-col-9">
        <Card className="conversation-title"><div>Manam</div></Card>
        <Card>
        <ScrollPanel style={stylePanel}>
            {messageComponentList}
        </ScrollPanel>
        </Card>
              
        <div>
        <Card>
        <CreateMessage sendMessage={sendMessage}/>
        </Card>
        </div>
        </div>
    </div>
        
        
    )
}
export default Conversation