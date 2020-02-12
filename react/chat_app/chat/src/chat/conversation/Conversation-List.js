import React from 'react';
import { connect, useSelector, useDispatch  } from  'react-redux';
import { conversationChanged  } from '../../store/actions';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';


const ConversationList = (props) => {
    const selectedConversationIndex = useSelector(state => state.conversation.selectedConversation.id);
    const conversations = useSelector(state => state.conversation.conversations)
    const dispatch = useDispatch();
    
    const conversationItemClick = (selectedConversationIndex) => {dispatch(conversationChanged(selectedConversationIndex))}  
    
    const conversationItems = conversations.map((conversation, index) => {
        let actual_id = index + 1;
        return <ConversationItem 
            key={index}
            key_prop={actual_id}
            isActive={actual_id === parseInt(selectedConversationIndex) }
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