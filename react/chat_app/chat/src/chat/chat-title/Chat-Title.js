import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Chat-Title.css';



const ChatTitle = (props) => {

    const handleDrawerOpen = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("loggedIn");
      };
    return (
        <div id="chat-title">
            <span>{props.selectedConversation.title}</span>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
               
                >
                <MenuIcon />
                </IconButton>
            </Toolbar>
        </div>
    );
}

export default ChatTitle;