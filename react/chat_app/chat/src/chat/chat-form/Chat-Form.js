import React, { useState } from 'react';
import { newMessageAdded } from '../../store/actions';
import { useDispatch } from 'react-redux'

import './Chat-Form.css';


function ChatForm(props) {

    const [textValue,setTextValue] = useState("");
    const dispatch = useDispatch()
    

    const senMessage = (event) => {
        
        if (event.key === 'Enter') {
            setTextValue("");
            
            dispatch(newMessageAdded(event.target.value,props.socket));
           
          }
        else{
            
        }
    }
    const handleChange = (event) =>{
        setTextValue(event.target.value);
        
    }
   /* <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" /> */
    return (
       
            <div id="chat-form">
               
                <input type="text" value={textValue} onKeyDown={senMessage} onChange={handleChange}    placeholder="type a message" />
            </div> 
      
    );

    
}

export default ChatForm;