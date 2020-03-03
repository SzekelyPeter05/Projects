const initialLogin = {
    step: 1,
    firstName : "",
    lastName : "",
    email : localStorage.getItem('email') === 'undefined' ? false : localStorage.getItem('email'),
    ocupation : "",
    city : "",
    loggedIn : localStorage.getItem('loggedIn') === 'undefined' ? false : localStorage.getItem('loggedIn'),
    registerScreen : false,
    openSuccesRegisterMessage: false,
    
}

const login_reducer = (state = initialLogin, action) => {
   
    switch (action.type) {
        case 'NEXT_LOGIN_STEP': {
            let newState = { ...state }
            newState.step = newState.step + 1
            return newState;
        }
        case 'PREV_LOGIN_STEP': {
            let newState = { ...state }
            newState.step = newState.step - 1
            return newState;
        }
        case 'CHANGE_REGISTER_SCREEN' : {
            let newState = { ...state }
            newState.registerScreen = !newState.registerScreen;
            if(action.message === "Succes"){
                newState.openSuccesRegisterMessage =  true;
            }
            return newState;
        }
        case 'CLOSE_SUCCES_MESSAGE' :{
            let newState = { ...state }
            newState.openSuccesRegisterMessage = false;
            return newState;
        }
        case 'LOG_IN' : {
            let newState = {...state}
            newState.loggedIn = true;
            return newState;
        }
        
      
        default:
            return state;


    }
}

export default login_reducer;