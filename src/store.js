import { configureStore } from "@reduxjs/toolkit";
import { listingListRedeucer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducer";

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
});

export default store;
