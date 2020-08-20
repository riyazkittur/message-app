import React from 'react'
import {Card} from 'primereact/card'
import {OrderList} from 'primereact/orderlist';
import CreateMessage from './create-message';
import { conversationProps,messageData } from '../../../types/conversationState';

export function Conversation(props:conversationProps){
    const {messages,sendMessage}=props

const messageTemplate=(messageDetails:messageData)=>{
    return(
        <div className="p-clearfix">
        <div style={{float:messageDetails.isReceived?'left':'right'}}>{messageDetails.message}</div>
        </div>
    )

}

    return(
        <div className="p-grid p-justify-between">
            <div className="p-col-3"></div>
            <div className="p-col p-col-align-stretch">
            <Card style={{float:'center',width: '80%'}}>
                <OrderList
                value={messages}
                header="Manam"
                itemTemplate={messageTemplate}
                responsive={true}
                listStyle={{height:'10em'}}
                >
                </OrderList>
                <div className="p-col p-col-align-stretch">
                <CreateMessage sendMessage={sendMessage}/>
                </div>
            </Card>
            </div>
        </div>
        
    )
}
export default Conversation