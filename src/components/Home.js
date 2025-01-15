import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      {" "}
      <Banner />{" "}
      <div className="home_section">
        <Card
          src={
            "https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720&im_format=avif"
          }
          title={"Entire home in Ponta do Ouro, Mozambique"}
          description={"NEW DECK WALKWAY WITH DIRECT ACCESS TO THE BEACH."}
          price={"R11,021 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720&im_format=avif"
          }
          title={"Entire home in Clarens, South Africa"}
          description={"A stunning house filled with bright, natural light."}
          price={"R4,894 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1104871314073806936/original/cbaa28ed-05db-499a-a840-c48660d27831.jpeg?im_w=1200&im_format=avif"
          }
          title={"Entire villa in Westbrook, South Africa"}
          description={"COME AND REST at this unique and tranquil getaway."}
          price={"R4,589 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"
          }
          title={"Camper/RV in Fouriesburg, South Africa"}
          description={"This secluded self-catering accommodation offers the ideal romantic breakaway."}
          price={"R2,200 night"}
        />
      </div>
      <div className="home_section">        <Card
          src={
            "https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720&im_format=avif"
          }
          title={"Entire home in Ponta do Ouro, Mozambique"}
          description={"NEW DECK WALKWAY WITH DIRECT ACCESS TO THE BEACH."}
          price={"R1,820 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720&im_format=avif"
          }
          title={"Entire home in Clarens, South Africa"}
          description={"A stunning house filled with bright, natural light."}
          price={"R1,820 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1104871314073806936/original/cbaa28ed-05db-499a-a840-c48660d27831.jpeg?im_w=1200&im_format=avif"
          }
          title={"Entire villa in Westbrook, South Africa"}
          description={"COME AND REST at this unique and tranquil getaway."}
          price={"R1,820 night"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/109117013/5bff66ba_original.jpg?im_w=1200&im_format=avif"
          }
          title={"Camper/RV in Fouriesburg, South Africa"}
          description={"This secluded self-catering accommodation offers the ideal romantic breakaway."}
          price={"R1,820 night"} />
          </div>
    </div>
  );
};

export default Home;
