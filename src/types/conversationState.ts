export interface conversationState{
        messages:messageData[]
}
export interface conversationProps{
        messages:messageData[]
        sendMessage:Function
}
export interface createMessageProps{
        sendMessage:Function
}
export interface messageData{
        isReceived:boolean
        message:string
}
