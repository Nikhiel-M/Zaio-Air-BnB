import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListRedeucer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducers";
import { userLoginReducer } from "./reducers/userReducer";
import { thunk } from "redux-thunk";

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

const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware,
});

export default store;
