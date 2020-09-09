import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card'
import { ScrollPanel } from 'primereact/scrollpanel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import CreateMessage from './create-message';
import { conversationProps, messageData } from '../../../types/conversationState';
import './conversation.css'
import HighlightMessage from '../highlight-message';

export function Conversation(props: conversationProps) {
    const { messages, sendMessage, loadMessages } = props


    const [searchText, searchMessages] = useState('')
    const stylePanel = { width: '100%', height: '400px' }

    useEffect(() => {
        loadMessages()
    },
        [loadMessages]
    )

    const messageComponentList = messages.map((msg: messageData) => {
        return (
            <div>
                {
                    !msg.isReceived && <div key={msg.id} className="p-grid p-justify-end">
                        <div className='p-col-5 p-col-fixed'>
                            <Card className={'sent-message'}
                                subTitle={msg.authorInfo.isContact ? msg.authorInfo.name : msg.authorInfo.phoneNumber}>
                                <HighlightMessage message={msg.message} searchText={searchText} />
                            </Card>
                        </div>
                    </div>
                }
                {
                    msg.isReceived && <div key={msg.id} className="p-grid p-justify-start">
                        <div className='p-col-5 p-col-fixed'>
                            <Card className={'received-message'}
                                subTitle={msg.authorInfo.isContact ? msg.authorInfo.name : msg.authorInfo.phoneNumber}>
                                <HighlightMessage message={msg.message} searchText={searchText} />
                            </Card>
                        </div>
                    </div>
                }
            </div>
        )
    })

    return (
        <div className="p-grid">
            <div className="p-col-3"></div>
            <div className="p-col-9">
                <Card className="conversation-title">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            Manam
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <InputText placeholder="Keyword"
                                    onChange={(e) => searchMessages((e.target as HTMLInputElement).value)} />
                                <Button icon="pi pi-search" className="p-button-warning" />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <ScrollPanel style={stylePanel}>
                        {messageComponentList}
                    </ScrollPanel>
                </Card>
                <div>
                    <Card>
                        <CreateMessage sendMessage={sendMessage} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Conversation
