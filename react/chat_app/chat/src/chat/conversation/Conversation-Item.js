import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

import './Conversation-Item.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
  }));

const ConversationItem = (props) => {
    let className = 'conversation';

    if (props.isActive) {
        className += ' active';
    }
    const classes = useStyles();

    return (
        <div className={className} onClick={props.onClickItem.bind(this,props.key_prop)}>
            <Avatar className={classes.purple} alt={props.conversation.imageAlt} src={props.conversation.imageUrl}>OP</Avatar>
            
            <div className="title-text">{props.conversation.title}</div>
            <div className="created-date">{props.conversation.createdAt}</div>
            <div className="conversation-message">
                {props.conversation.latestMessageText}
            </div>
        </div>
    );
}

export default ConversationItem;