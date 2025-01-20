import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../actions/modalAction";
import Login from "../Login";

const Header = () => {
  const dispatch = useDispatch();

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };

  return (
    <div className="header">
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*87ce_sVbWHSHpDhCMBwKtA.png"
        alt="Air-BnB logo"
        className="header_logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Airbnb your home</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <span onClick={openModalHandle}> Login In</span>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
