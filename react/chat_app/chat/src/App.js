import React from 'react';
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import SignUp from './login';
import { useSelector,useDispatch } from 'react-redux';   /*connect*/
import {setInitial} from './store/actions';   /*logIn*/
import axios from 'axios';


function App(props) {

  const dispatch = useDispatch();
 
 
  const loginState =  useSelector(state => state.login);
  if(loginState.loggedIn)
  { 
     props.socket.emit("login", { email : loginState.email});
      
      axios.post(
      'http://localhost:5000/GetConversations',
      {  email: loginState.email }
    ).then(resp =>  { 
          
          dispatch(setInitial(resp.data.converstations,resp.data.profile_path,resp.data.firstName,resp.data.lastName));
         
        });

  };

  return (
        loginState.loggedIn  ? <ChatShell socket={props.socket} /> : <SignUp  socket={props.socket} />
  );
}

export default  App;   /*connect(logIn)(App);*/
