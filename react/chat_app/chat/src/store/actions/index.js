export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    conversationId
});

export const conversationDeleted = () => ({
    type: 'DELETE_CONVERSATION'
});

export const newMessageAdded = textMessage => ({
    type: 'NEW_MESSAGE_ADDED',
    textMessage
});

export const changeRegisterScreenn = (message) => ({
    type: "CHANGE_REGISTER_SCREEN",
    message
});
export const closeRegisterMessage = () => ({
    type: 'CLOSE_SUCCES_MESSAGE'
});
export const logIn = () => ({
    type: 'LOG_IN'
});



