const initialLogin = {
    step: 1,
    firstName : "",
    lastName : "",
    email : "",
    ocupation : "",
    city : "",
    loggedIn : false,  /* localStorage.getItem('chat_user_name'),*/
    registerScreen : false,
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
           
            return newState;
        }
        default:
            return state;


    }
}

export default login_reducer;