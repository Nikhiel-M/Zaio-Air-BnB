import { configureStore } from "@reduxjs/toolkit";
import { listingListRedeucer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducer";
import { thunk } from "redux-thunk";

const userInfoFromLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

const store = configureStore({
  reducer: {
    listingList: listingListRedeucer,
    modal: modalReducer,
    userLogin: userLoginReducer,
  },
  preloadedState: initialState,
  middleware: [thunk],
});

export default store;
