import React from "react";
import { imageUri } from "../Constants";
import { headerContainer, logoImage } from "./Styles";

const Header = () => {
  return (
    <div style={headerContainer}>
      <img src={imageUri} style={logoImage} />
      Welcome
    </div>
  );
};

export default Header;
