import { combineReducers } from 'redux';

import conversationState from './conversations';
import loginState from './login-reducer';

const rootReducer = combineReducers({
   conversation: conversationState,
   login: loginState
});

export default rootReducer;