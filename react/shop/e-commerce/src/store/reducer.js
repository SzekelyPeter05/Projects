const initialState = {
    selectedScreen : "main",
    logoUrl : "./img/logo.png",
    products: null,
};

const shopReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'SET_SCREEN' : {
        let newState = { ...state }
        newState.selectedScreen = action.screen;
        if (action.screen ==='shop')
        {
          newState.products = action.products;
        }
        return newState;
       }
       case 'SET_LOGO' : {
        let newState = { ...state }
        newState.logoUrl = action.url;
        return newState;
       }
      default :
       return state;
    }
}

export default shopReducer;