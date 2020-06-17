import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {addConversations} from '../../store/actions';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const DialogNewFriend = (props) =>{

  const [users, setUsers] = React.useState([]);
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const dispach = useDispatch();
  
      
  useEffect(() => 
    {
      async function getUserList() {
         await axios.post('http://szekelypeter.com:5000/getUsers',{email: localStorage.getItem('email')}).then(resp => {
          setUsers(resp.data);
          
        });
      }
      getUserList()
    }
    , []);
    const handleSave = () => {
      let new_friends = checked.slice(1);
      const saveFriends = async (friends)  => 
      { 
        await axios.post('http://szekelypeter.com:5000/saveFriends',{user:localStorage.getItem('email'),users: friends}).then(resp => {
            
            let users_filtered = users.filter(item => !friends.find(find=> find === item.email));
            setUsers(users_filtered);
            dispach(addConversations(resp.data.friends));
        });
      }
      saveFriends(new_friends);

      setChecked([1]);
      props.handleClose();
    }
    const handleToggle = value => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };


    return (
      users !== 'undefined' ? 
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">New friends</DialogTitle>
    <DialogContent>
    <DialogContentText>
       Find your new friends!
    </DialogContentText>
    <List dense className={classes.root}>
      {users.map(value => {  
        const labelId = `checkbox-list-secondary-label-${value.email}`;
        const profileSrc = value.profil_path ? process.env.PUBLIC_URL + value.profil_path : null;
        return (
          <ListItem key={value.email} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value.email}`}
                src={profileSrc}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value.firstName}  ${value.lastName}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value.email)}
                checked={checked.indexOf(value.email) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </DialogContent>
    <DialogActions>
    <Button onClick={props.handleClose} color="primary">
        Cancel
    </Button>
    <Button onClick={handleSave} color="primary">
        Save
    </Button>
    </DialogActions>
</Dialog> 
:
null
);
}


export default DialogNewFriend;