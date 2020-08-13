import React from 'react'
import {Card} from 'primereact/card'
import {OrderList} from 'primereact/orderlist';
import CreateMessage from './create-message';
export function Conversation(){
    return(
        <Card style={{width: '360px'}}>
        <OrderList></OrderList>
        <CreateMessage/>
        </Card>
    )
}
export default Conversation