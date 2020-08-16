import React from 'react'
import {Card} from 'primereact/card'
import {OrderList} from 'primereact/orderlist';
import CreateMessage from './create-message';
import { conversationProps } from '../../../types/conversationState';

export function Conversation(props:conversationProps){
    const {messages,sendMessage}=props

const messageTemplate=(message:string)=>{
    return(
        <div className="p-clearfix">
        <div style={{float:'right'}}>{message}</div>
        </div>
    )

}

    return(
        <Card style={{width: '360px'}}>
        <OrderList 
        value={messages} 
        header="Manam"
        itemTemplate={messageTemplate}
        responsive={true}
        listStyle={{height:'10em'}}
        >

        </OrderList>
        <CreateMessage sendMessage={sendMessage}/>
        </Card>
    )
}
export default Conversation