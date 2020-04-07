import React from 'react';
import { connect, useSelector, useDispatch  } from  'react-redux';
import { conversationChanged,setConversations  } from '../../store/actions';
import {addConversations} from '../../store/actions';

import ConversationItem from './Conversation-Item';
import './Conversation-List.css';


const ConversationList = (props) => {
    const conversation =  useSelector(state => state.conversation);
    
    const selectedConversationIndex = typeof conversation.selectedConversation !== 'undefined'
                                    ?
                                    conversation.selectedConversation.id
                                    : 
                                    null;
    const conversations = useSelector(state => state.conversation.conversations)
    const dispatch = useDispatch();
    
    const conversationItemClick = (selectedConversationIndex) => {dispatch(conversationChanged(selectedConversationIndex))}  
   

    const conversationItems = typeof conversations !== 'undefined'
                                            ?
                                            
                                             conversations.map((conversation, index) => {
                                                    let actual_id = index + 1;
                                                    return <ConversationItem 
                                                        key={index}
                                                        key_prop={actual_id}
                                                        isActive={actual_id === parseInt(selectedConversationIndex) }
                                                        conversation={conversation}
                                                        onClickItem={conversationItemClick} />;
                                            })
                                            :
                                            null;

    return (
        <div id="conversation-list">
            {conversationItems}
        </div>
    );
}

export default connect(conversationChanged,setConversations,addConversations)(ConversationList);