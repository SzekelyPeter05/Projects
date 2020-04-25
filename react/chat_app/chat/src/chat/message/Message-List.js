import React, {useEffect, useRef } from 'react';

import Message from './Message';
import { connect, useSelector  } from  'react-redux';

import { newMessageAdded, receiveMessage } from  '../../store/actions';
import './Message-List.css';


const MessageList = () => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
             scrollToBottom();
      });
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
        <div id="chat-message-list-wrapper">
           
                 {messageItems}
                 <div id="message-end" ref={messagesEndRef} />
        
        </div>
       
       
    );
}


export default connect(newMessageAdded,receiveMessage)(MessageList);