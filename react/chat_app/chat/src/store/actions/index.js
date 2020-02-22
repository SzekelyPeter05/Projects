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

export const changeRegisterScreenn = () => ({
    type: "CHANGE_REGISTER_SCREEN"
});
export const changeRegisterMessage = () => ({
    type: "REGISTER_MESSAGE_CHANGE"
})

