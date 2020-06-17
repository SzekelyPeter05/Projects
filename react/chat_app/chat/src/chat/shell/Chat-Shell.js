import React from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';

import ChatProfile from '../chat-profile/chat-profile';





import './Chat-Shell.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
 
/*  className={clsx(open && classes.hide)} */
const ChatShell = (props) => {
    const isSmallScreen = useMediaQuery('(max-width: 700px)');
    const wrapperStyle = {
        display: "flex",
      };
    const  pictureStyle = {
        minWidth : "5%",
    }
    let prifile_div = !isSmallScreen ? <div style={pictureStyle}>
                         <ChatProfile/>
                      </div>
                      : null;
                             
                       
    return (
        <div style={wrapperStyle}>
            {prifile_div}
         
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