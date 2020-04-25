import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Message.css';

const Message = (props) => {
    let messageClass = 'message-row';
    let imageThumbnail = null;

    if (props.isMyMessage) {
        messageClass += ' you-message';
    } else {
        messageClass += ' other-message';
        imageThumbnail = <Avatar alt={props.message.imageAlt} src={props.message.imageUrl} /> ;
    }

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {props.message.messageText}
                </div>
                <div className="message-time">{props.message.createdAt}</div>
            </div>
        </div>
    );
}

export default Message;