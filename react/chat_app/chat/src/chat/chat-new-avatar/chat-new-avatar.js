import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AvatarSetter from './avatar-form';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
import {refreshProfile} from '../../store/actions';
import axios from 'axios';


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
   
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function NewAvatar(props) {
  
  
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch()
  const handleClose = () => {
    props.setOpen(false);
  };
  
  const save = () =>{
    saveAvatar().then(resp =>  {                     
            if(resp.data.type ==="Succes")
              { 
                dispatch(refreshProfile(resp.data.path));
                
                props.setOpen(false);            
              }
            else if(resp.data.type ==="fail"){
             
            }
            else{
             
            }
          }
);
  }
  const saveAvatar = async () => {
      
    let request =  await axios.post(
        'http://szekelypeter.com:5000/saveAvatar',
        {  content: preview, user: localStorage.getItem('email')}
      )
      return request;
    
  };

  return (
    <div>
      
      <Dialog onClose={handleClose}  aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Upload Avatar
        </DialogTitle>
        <DialogContent dividers>
                <AvatarSetter  setPreview={setPreview} preview={preview}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={save} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
