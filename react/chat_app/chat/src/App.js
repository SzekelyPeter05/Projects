import React from 'react';
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import { createStore } from 'redux'
import  rootReducer  from './store/reducers'
import { Provider } from 'react-redux';
import SignUp from './login';
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  const loggedIn = false;
  return (
    <Provider store={store}>
        { !loggedIn && <SignUp /> }
        { loggedIn && <ChatShell /> }
    </Provider>
  );
}

export default App;
