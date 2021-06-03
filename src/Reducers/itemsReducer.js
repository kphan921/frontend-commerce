const initialState = {
  user: [],
  items: [],
  orders: [],
  currentItem: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.user,
      };
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
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    case "DELETE_ORDER":
      return {
        ...state,
        orders: [
          ...state.orders.filter((order) => order.id !== action.order.id),
        ],
      };
    case "CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.item,
      };
    case "ADD_REVIEW":
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default itemsReducer;
