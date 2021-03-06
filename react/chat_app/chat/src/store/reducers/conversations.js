
const initialState = {
    conversations: [
       
    ],
    users : {},
    selectedConversation: {}
};


initialState.selectedConversation = initialState.conversations[0];

const conversationsReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'SET_NAME' : {
        let newState = { ...state }
        newState.firstName = action.first;
        newState.lastName  = action.last;
        return newState;
       }
      case 'REFRESH_PROFILE'  : {
        let newState = {...state}
        newState.profile_path  = action.path + '?$' +  Date.now();
        return newState;
      }
      case 'SET_INITIAL' : {
        let newState = {...state}
        newState.conversations =  action.conversations;
        
        newState.conversations.map((item, index) => item.id = index + 1);
        newState.selectedConversation = newState.conversations[0];
        newState.firstName = action.firstName;
        newState.lastName  = action.lastName;
        newState.profile_path  = action.profile_path;
        return newState;
      }
      case 'LOG_OUT' : {
        let newState = {...state}
       
        newState = initialState;
        return newState;
       }
      case 'SELECTED_CONVERSATION_CHANGED': {
       
        const newState = { ...state };
        newState.selectedConversation = 
           newState.conversations.find(
                conversation => conversation.id === action.conversationId
            );
        
       
        return newState;
      }
      case 'SET_CONVERSATIONS' : {
        const newState = { ...state };
        newState.conversations =  action.conversations;
        newState.conversations.map((item, index) => item.id = index + 1);
        
        newState.selectedConversation = newState.conversations[0];
        return newState;
      }
      case 'ADD_CONVERSATIONS' : {
        const newState = { ...state };
        newState.conversations.push(  ...action.friends);

        newState.conversations.map((item, index) => item.id = index + 1);
        
        return newState;
      }
      case 'DELETE_CONVERSATION': {
        const newState = { ...state };
        let selectedConversationIndex = 
            newState.conversations.findIndex(c => c.id === newState.selectedConversation.id);
        newState.conversations.splice(selectedConversationIndex, 1);

        if (newState.conversations.length > 0) {
            if (selectedConversationIndex > 0) {
                --selectedConversationIndex;
            }
    
            newState.selectedConversation = newState.conversations[selectedConversationIndex];
        } else {
            newState.selectedConversation = null;
        }

        return newState;
      }
      case 'NEW_MESSAGE_ADDED': {
        const newState =  { ...state };
        newState.selectedConversation =  { ...newState.selectedConversation };
        
        action.socket.emit("private", { msg: action.textMessage,
                                        to: newState.selectedConversation.email,
                                        from:localStorage.getItem('email'),
                                        imageUrl : newState.selectedConversation.imageUrl });
        newState.latestMessageText = action.textMessage;

       newState.selectedConversation.messages.push(
            {
                imageUrl: null,
                imageAlt: action.textMessage,
                messageText: action.textMessage,
                createdAt: 'Apr 16',
                isMyMessage: true,
               
            },
        )

        return newState;
      }
      case 'RECEIVE_MESSAGE_ADDED': {
        const newState =  { ...state };
        if(newState.selectedConversation.email === action.from)
        {
          newState.selectedConversation =  { ...newState.selectedConversation };
          newState.latestMessageText = action.textMessage;
          newState.selectedConversation.messages.push(
            {
                imageUrl: action.imageUrl,
                imageAlt: action.msg,
                messageText: action.msg,
                createdAt: 'Apr 16',
                isMyMessage: false,
               
            })
        }

        return newState;
      }
     
      default:
        return state;
    }
  }
  
  
export default conversationsReducer;