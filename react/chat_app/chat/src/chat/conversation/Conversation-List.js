import React from 'react';
import { connect, useSelector, useDispatch  } from  'react-redux';
import { conversationChanged  } from '../../store/actions';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';


const ConversationList = (props) => {
    const selectedConversationIndex = useSelector(state => state.conversation.selectedConversation.id);
    const dispatch = useDispatch();
    const conversations = useSelector(state => state.conversation.conversations)
    const conversationItemClick = (selectedConversationIndex) => {console.log(selectedConversationIndex)} /* dispatch(conversationChanged(selectedConversationIndex)*/ 
    alert(selectedConversationIndex);
    const conversationItems = conversations.map((conversation, index) => {
        return <ConversationItem 
            key={index}
            key_prop={index}
            isActive={index === parseInt(selectedConversationIndex) }
            conversation={conversation}
            onClickItem={conversationItemClick} />;
    });

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default connect(conversationChanged)(ConversationList);