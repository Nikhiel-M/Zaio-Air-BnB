import { OPEN_MODAL } from "../types/modalTypes";

const initialState = { openClose: "closed", modalType: "" };

export const modalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      openClose: action.payload.openClose,
      modalType: action.payload.modalType,
    };
  }
  return state;
};
