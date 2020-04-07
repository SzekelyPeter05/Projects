
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



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

export default function ChatProfile() {
  const classes = useStyles();
  const img_tag = localStorage.getItem('profilePic') ?
                                               <img src={process.env.PUBLIC_URL + localStorage.getItem('profilePic')} alt="profile" />
                                                     :
                                                null;
 
  
  return (
    <div className={classes.root}>
      {img_tag}
    </div>
  );
}