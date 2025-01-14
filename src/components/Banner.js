import React, { useState } from "react";
import { Button } from "@mui/material";
import "./banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button
          onClick={() => setShowSearch((prevState) => !prevState)}
          className="banner_searchButton"
          variant="outlined"
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
