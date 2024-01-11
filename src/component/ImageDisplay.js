import React from "react";
import { mainImageContainer } from "./Styles";

const ImageDisplay = ({ uri }) => {
  return (
    <div style={mainImageContainer}>
      <img
        src={uri}
        style={{ height: 500, width: 1000, flex: 1 }}
        alt="main-img"
      />
    </div>
  );
};

export default ImageDisplay;
