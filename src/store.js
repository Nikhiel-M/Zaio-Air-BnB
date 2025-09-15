import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { listingListRedeucer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  listingList: listingListRedeucer,
  modal: modalReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: [thunk],
});

export default store;
