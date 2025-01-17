import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPageInfo">
        <p>62 Stays 26 august to 30 august 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button> 
        <Button variant="outlined">Price</Button> 
        <Button variant="outlined">Rooms and beds</Button> 
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults 
      img={"https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"}
      location={" Fouriesburg, South Africa"}
      title={"Damn Caravan: Fairview Estates"}
      description={"4 guests 3 bedrooms 3 beds 1 bath."}
      star={4.78}
      price={"R2,200 / night"}
      total={"R11,000 total"}
      />

<SearchResults 
      img={"https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"}
      location={" Fouriesburg, South Africa"}
      title={"Damn Caravan: Fairview Estates"}
      description={"4 guests 3 bedrooms 3 beds 1 bath."}
      star={4.78}
      price={"R2,200 / night"}
      total={"R11,000 total"}
      />

<SearchResults 
      img={"https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"}
      location={" Fouriesburg, South Africa"}
      title={"Damn Caravan: Fairview Estates"}
      description={"4 guests 3 bedrooms 3 beds 1 bath."}
      star={4.78}
      price={"R2,200 / night"}
      total={"R11,000 total"}
      />

<SearchResults 
      img={"https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"}
      location={" Fouriesburg, South Africa"}
      title={"Damn Caravan: Fairview Estates"}
      description={"4 guests 3 bedrooms 3 beds 1 bath."}
      star={4.78}
      price={"R2,200 / night"}
      total={"R11,000 total"}
      />
    </div>
  );
};

export default SearchPage;
