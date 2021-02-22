import React from "react";
import northPic from "../img/north.JPG";
import southPic from "../img/south.JPG";
import "../styles/Hem.css";
const hemConfig = {
  North: {
    text: "its the northern hemisphere",
    picture: northPic,
  },
  South: {
    text: "its the southern hemisphere",
    picture: southPic,
  },
};

const Hemisphere = ({ lat }) => {
  const hem = lat > 0 ? "North" : "South";
  const { text, picture } = hemConfig[hem];
  return (
    <div className={hem}>
      asdasd sasd
      <div>{hem}</div>
      <div>
        <img src={picture} alt="" />
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Hemisphere;
