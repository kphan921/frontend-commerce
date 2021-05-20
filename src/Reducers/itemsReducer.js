const initialState = {
    items: [],
    order: [],
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state, items: action.items
            }
    
        default:
            return state;
            
    }

}

export default itemsReducer;