import React from 'react';
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import SignUp from './login';
import { useSelector, connect } from 'react-redux';
import {logIn} from './store/actions';

function App() {
  
  const loggedIn =  useSelector(state => state.login.loggedIn);
  return (
          loggedIn  ? <ChatShell /> : <SignUp />
  );
}

export default connect(logIn)(App);
