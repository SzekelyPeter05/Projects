import { combineReducers } from 'redux';

import conversationState from './conversations';

const rootReducer = combineReducers({
   conversation: conversationState
});

export default rootReducer;