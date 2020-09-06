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
        id:string
        isReceived:boolean
        message:string
        timestamp:Date
        authorInfo:author
}
export interface newMessage{
        isReceived:boolean
        message:string
        timestamp:Date  
        authorInfo:author
}
export interface highlightMessageProps{
        message:string,
        searchText:string
}
export interface author{
        name:string,
        phoneNumber:string,
        isContact:boolean
}