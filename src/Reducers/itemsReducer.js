const initialState = {
  logged_in: false,
  items: [],
  order: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.items,
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.orders,
      };
    case "LOG_IN":
      return {
        ...state,
        logged_in: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        logged_in: false,
      };

    default:
      return state;
  }
};

export default itemsReducer;
