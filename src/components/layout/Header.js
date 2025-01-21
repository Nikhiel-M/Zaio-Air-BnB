import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { openModal } from "../../actions/modalActions";
import { logout } from "../../actions/userActions";
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };

  const logoutHandler = () => {
    dispatch(logout());
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
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span onClick={logoutHandler}>Log out</span>
              </>
            ) : (
              <>
                <span>Sign up</span>
                <span onClick={openModalHandle}>Login</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;