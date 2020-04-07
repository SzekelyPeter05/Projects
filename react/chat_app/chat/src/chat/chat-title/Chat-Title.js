import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Chat-Title.css';
import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {logOutSy} from '../../store/actions';
import {useDispatch} from 'react-redux';
import NewAvatar from '../chat-new-avatar/chat-new-avatar';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);



const ChatTitle = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openNewAvatar, setOpenNewAvatar] = React.useState(false);
    const dispatch = useDispatch();
    const logOut = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("profilePic");
      dispatch(logOutSy(props.socket));
    }
    
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDrawerOpen = (event) => {
        setAnchorEl(event.currentTarget);
        
      };
    const uploadPicture = () =>{
      setOpenNewAvatar(true);
    }
    return (
        <div id="chat-title">
            <span>{props.selectedConversation.title}</span>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                style={{padding: "0px"}}
                >
                <MenuIcon />
                </IconButton>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={uploadPicture}>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Upload Profile" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={logOut}>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon >
                        <ListItemText primary="Log Out" />
                        </StyledMenuItem>
                    </StyledMenu>
            </Toolbar>
            <NewAvatar open={openNewAvatar}  setOpen={setOpenNewAvatar} />
        </div>
    );
}

export default ChatTitle;