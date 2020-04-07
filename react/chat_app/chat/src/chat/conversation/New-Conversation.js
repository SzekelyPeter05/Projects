import React from 'react';
import  DialogNewFriend  from './New-Friends-Dialog';

import './New-Conversation.css';

function NewConversation() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        
    };
   
    return (
        <div>
            <div id="new-message-container">
                 <button className="pointer" onClick={handleClickOpen}>+</button>
            </div>
           <DialogNewFriend open={open} handleClose={handleClose} />
        </div>
       
    );
}

export default NewConversation;