import {connect} from 'react-redux'
import {sendMessage } from '../../redux/actions'
import {getConversation} from '../../redux/reducers/conversationSlice'
import Conversation from '../components/messages/conversation'

const mapStateToProps=(state:any)=>{
    const {messages}=getConversation(state)
    return{
        messages
    }
}
const mapDispatchToProps={
    sendMessage
}
export default connect(mapStateToProps,mapDispatchToProps)(Conversation)