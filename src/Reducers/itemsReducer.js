const initialState = {
  user: [],
  items: [],
  orders: [],
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
        ...state, orders: [...state.orders, action.order]
      };
    case "DELETE_ORDER":
      // let filteredOrders = [...state.orders.filter(order=> order.id !== action.order.id)]
      return {
        ...state, orders: [...state.orders.filter(order=> order.id !== action.order.id)]
      };

    default:
      return state;
  }
};

export default itemsReducer;
