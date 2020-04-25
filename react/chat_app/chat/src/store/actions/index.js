export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    conversationId
});

export const conversationDeleted = () => ({
    type: 'DELETE_CONVERSATION'
});

export const newMessageAdded = (textMessage,socket) => ({
    type: 'NEW_MESSAGE_ADDED',
    textMessage,
    socket
});

export const changeRegisterScreenn = (message) => ({
    type: "CHANGE_REGISTER_SCREEN",
    message
});
export const closeRegisterMessage = () => ({
    type: 'CLOSE_SUCCES_MESSAGE'
});
export const logIn = (email,path) => ({
    type: 'LOG_IN',
    email,
    path
});
export const logOutSy = (socket) => ({
    type: 'LOG_OUT',
    socket
});
export const setConversations = (conversations) => ({
    type: 'SET_CONVERSATIONS',
    conversations
});
export const addConversations = (friends) => ({
    type: 'ADD_CONVERSATIONS',
    friends
});
export const refreshProfile = (path)=>({
    type: 'REFRESH_PROFILE',
    path
});
export const setName = (first,last)=>({
    type: 'SET_NAME',
    first,
    last
});
export const setInitial = (conversations,profile_path,firstName,lastName)=> ({
    type: 'SET_INITIAL',
    conversations,
    profile_path,
    firstName,
    lastName
});
export const receiveMessage = (msg,from,imageUrl) =>({
    type: 'RECEIVE_MESSAGE_ADDED',
    msg,
    from,
    imageUrl
});




