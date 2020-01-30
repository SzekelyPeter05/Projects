import React from 'react';

import Message from './Message';
import { connect, useSelector  } from  'react-redux';
import { newMessageAdded } from  '../../store/actions';
import './Message-List.css';


const MessageList = () => {
    
    const messages = useSelector(state => state.conversation.selectedConversation.messages)
   
    const messageItems = messages.map((message, index) => {
        return <Message 
            key={index}
            isMyMessage={message.isMyMessage}
            message={message} />;
    });

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}


export default connect(newMessageAdded)(MessageList);