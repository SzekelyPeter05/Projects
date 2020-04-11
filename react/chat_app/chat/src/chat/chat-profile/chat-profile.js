
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {refreshProfile,setInitial} from '../../store/actions';
import { connect, useSelector } from 'react-redux';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const ChatProfile =  () => {
  const classes = useStyles();
  const conState =  useSelector(state => state.conversation);
  const img_tag = conState.profile_path ?
                                               <img src={process.env.PUBLIC_URL + conState.profile_path} alt="profile" />
                                                     :
                                                null;
 
  
  return (
    <div className={classes.root}>
      {img_tag}
    </div>
  );
}

export default connect(refreshProfile,setInitial)(ChatProfile);