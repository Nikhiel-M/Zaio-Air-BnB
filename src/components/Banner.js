import React, { useState } from "react";
import { Button } from "@mui/material";
import "./banner.css";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search /> }
        <Button
          onClick={() => setShowSearch((prevState) => !prevState)}
          className="banner_searchButton"
          
        >
          {" "}
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
