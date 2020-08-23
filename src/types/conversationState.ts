export interface conversationState{
        messages:messageData[]
}
export interface conversationProps{
        messages:messageData[],
        sendMessage:Function,
        loadMessages:Function
}
export interface createMessageProps{
        sendMessage:Function
}
export interface messageData{
        id:string,
        isReceived:boolean
        message:string
        timestamp:Date
}
export interface newMessage{
        isReceived:boolean
        message:string
        timestamp:Date  
}
