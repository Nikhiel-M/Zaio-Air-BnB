import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalActions";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;

  const modalInlineStyle = openClose === "open" ? { display: "block" } : { display: "none" };

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };

  return (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;