import React from 'react';
import './App.css';
import ChatShell from './chat/shell/Chat-Shell';
import { createStore } from 'redux'
import  rootReducer  from './store/reducers'
import { Provider } from 'react-redux';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <Provider store={store}>
       <ChatShell />
    </Provider>
  );
}

export default App;
