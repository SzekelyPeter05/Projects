import React from 'react';

import Message from './Message';
import { connect, useSelector  } from  'react-redux';
import { newMessageAdded } from  '../../store/actions';
import './Message-List.css';


const MessageList = () => {
    
    const conversation = useSelector(state => state.conversation)
   
    const messageItems = typeof conversation.selectedConversation !== 'undefined' &&
                         typeof conversation.selectedConversation.messages !== 'undefined'
                         ?
                        conversation.selectedConversation.messages.map((message, index) => {
                        return <Message 
                            key={index}
                            isMyMessage={message.isMyMessage}
                            message={message} />;
                         })
                        :
                         null;

    return (
        <div id="chat-message-list">
            {messageItems}
        </div>
    );
}


export default connect(newMessageAdded)(MessageList);