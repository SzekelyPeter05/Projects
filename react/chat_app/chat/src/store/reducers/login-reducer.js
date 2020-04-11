const initialLogin = {
   
    email : localStorage.getItem('email') === 'undefined' ? false : localStorage.getItem('email'),
    ocupation : "",
    city : "",
    loggedIn : localStorage.getItem('loggedIn') === 'undefined' ? false : localStorage.getItem('loggedIn'),
    registerScreen : false,
    openSuccesRegisterMessage: false,
    
    
}

const login_reducer = (state = initialLogin, action) => {
   
    switch (action.type) {
      
        case 'CLOSE_SUCCES_MESSAGE' :{
            let newState = { ...state }
            newState.openSuccesRegisterMessage = false;
            return newState;
        }
        case 'LOG_IN' : {
            let newState = {...state}
            newState.loggedIn = true;
            newState.email = action.email;
           
            newState.profile_path  = action.path;
            
            
            return newState;
        }
      
        case 'LOG_OUT' : {
            let newState = {...state}
            newState.loggedIn = false;
            action.socket.emit("log_out");;
            return newState;
        }
        
      
        default:
            return state;


    }
}

export default login_reducer;