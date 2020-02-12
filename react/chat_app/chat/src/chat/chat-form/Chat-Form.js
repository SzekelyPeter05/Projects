import React, { useState } from 'react';
import { newMessageAdded } from '../../store/actions';
import { useDispatch } from 'react-redux'

import './Chat-Form.css';


function ChatForm() {

    const [textValue,setTextValue] = useState("");
    const dispatch = useDispatch()
    

    const senMessage = (event) => {
        
        if (event.key === 'Enter') {
            setTextValue("");
            dispatch(newMessageAdded(event.target.value));
            fetch("/api/customers")
                .then(res => res.json())
                
               
            
          }
        else{
            
        }
    }
    const handleChange = (event) =>{
        setTextValue(event.target.value);
        
    }
    return (
       
            <div id="chat-form">
                <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
                <input type="text" value={textValue} onKeyDown={senMessage} onChange={handleChange}    placeholder="type a message" />
            </div> 
      
    );

    
}

export default ChatForm;