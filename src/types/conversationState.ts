export interface conversationState{
        messages:string[]
}
export interface conversationProps{
        messages:string[]
        sendMessage:Function
}
export interface createMessageProps{
        sendMessage:Function
}