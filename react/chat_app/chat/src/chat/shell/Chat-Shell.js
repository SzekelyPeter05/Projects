import React from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';

import ChatProfile from '../chat-profile/chat-profile';





import './Chat-Shell.css';

 
/*  className={clsx(open && classes.hide)} */
const ChatShell = (props) => {

    const wrapperStyle = {
        display: "flex",
      };
    const  pictureStyle = {
        minWidth : "5%",
    }
    return (
        <div style={wrapperStyle}>
            <div style={pictureStyle}>
                <ChatProfile/>
            </div>
         
           <div id="chat-container">
                <ConversationSearch />
                <ConversationList  />
                <NewConversation />
                <ChatTitle  socket={props.socket} />
                <MessageList  />
                <ChatForm socket={props.socket} />
          </div>
        </div>
        
    );
}

export default ChatShell;