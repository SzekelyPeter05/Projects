const initialState = {
    selectedScreen : "main"
};

const shopReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'SET_SCREEN' : {
        let newState = { ...state }
        newState.selectedScreen = action.screen;
        return newState;
       }
      default :
       return state;
    }
}

export default shopReducer;