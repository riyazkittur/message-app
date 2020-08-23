import {connect} from 'react-redux'
import {sendMessage,loadMessages } from '../../redux/actions'
import {getConversation} from '../../redux/reducers/conversationSlice'
import Conversation from '../components/messages/conversation'

const mapStateToProps=(state:any)=>{
    const {messages}=getConversation(state)
    return{
        messages
    }
}
const mapDispatchToProps={
    sendMessage,
    loadMessages
}
export default connect(mapStateToProps,mapDispatchToProps)(Conversation)