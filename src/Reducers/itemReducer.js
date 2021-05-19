const initialState = {
    items: [],
    order: [],
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state, items: action.items
            }
            break;
    
        default:
            return state;
            
    }


    switch(action.type){
        case 'GET_ITEMS': 
        return
    }
    return state;
}

export default itemReducer;