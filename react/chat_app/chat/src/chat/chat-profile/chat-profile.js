
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {refreshProfile,setInitial} from '../../store/actions';
import { connect, useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';





const ChatProfile =  () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: isSmallScreen ? theme.spacing(8) : theme.spacing(16),
        height: isSmallScreen ? theme.spacing(8) : theme.spacing(16),
      },
    },
  }));
  const classes = useStyles();
  const conState =  useSelector(state => state.conversation);
  const img_tag = conState.profile_path ?
                                               <img src={'http://szekelypeter.com:5000/' + conState.profile_path} alt="profile" />
                                                     :
                                                null;
 
  
  return (
    <div className={classes.root}>
      {img_tag}
    </div>
  );
}



export default connect(refreshProfile,setInitial)(ChatProfile);