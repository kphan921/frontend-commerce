import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from "redux";
import itemsReducer from "./Reducers/itemsReducer";
import loginReducer from "./Reducers/loginReducer";

// export default createStore(
//   itemReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default configureStore({
  reducer: {
    login: loginReducer,
    items: itemsReducer,
  },
})