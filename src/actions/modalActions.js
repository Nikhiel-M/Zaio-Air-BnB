import { OPEN_MODAL } from "../types/modalTypes";

export const openModal = (openClose, modalType) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      modalType,
    },
  };
};
