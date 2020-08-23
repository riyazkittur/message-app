import React,{useEffect} from 'react'
import {Card} from 'primereact/card'
import { ScrollPanel } from 'primereact/scrollpanel';
import CreateMessage from './create-message';
import { conversationProps,messageData } from '../../../types/conversationState';

export function Conversation(props:conversationProps){
    const {messages,sendMessage,loadMessages}=props
    const styleCard={float:'center',width: '80%'}
    const styleTitleCard={float:'center',width: '80%', backgroundColor: '#D3D3D3'}
    const stylePanel={ width: '100%', height: '200px' }
    const stylePanelCard={float:'center',width: '80%', backgroundColor: '#F0F8FF' }
 
    
useEffect( ()=>{
    loadMessages()
     
      },[loadMessages]

)

const messageComponentList=messages.map((msg:messageData)=>{
    return (
        <div className="p-grid p-dir-col" key={msg.id} >
        <Card style={{marginBottom: '2em'}}>
            <p style={{float:msg.isReceived?'left':'right'}}>{msg.message}
            </p>
        </Card>
    </div>
    )
}) 
  
    return(
        <div className="p-grid p-justify-between">
            <div className="p-col-3"></div>
            <div className="p-col p-col-align-stretch">
            <Card style={styleTitleCard}><div style={{textAlign:'left'}}>Manam</div></Card>
            <Card style={stylePanelCard}>
            <ScrollPanel style={stylePanel}>
                {messageComponentList}
            </ScrollPanel>

            </Card>
            <div className="p-col-3"></div>
            <div className="p-col p-col-align-stretch">
            <Card style= {styleCard}>
            <CreateMessage sendMessage={sendMessage}/>
            </Card>
            </div>
            </div>
        </div>
        
    )
}
export default Conversation