import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalActions";
import Login from "./Login";
import Signup from "./Signup";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, modalType } = modal;

  useEffect(() => {
    if (openClose === "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [openClose]);

  const modalInlineStyle = openClose === "open" ? { display: "block" } : { display: "none" };

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };

  let content = null;
  if (modalType === "login") content = <Login />;
  if (modalType === "signup") content = <Signup />;

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