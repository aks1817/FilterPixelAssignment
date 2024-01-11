import React from "react";
import { imageUri } from "../Constants";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#262626",
        fontSize: "30px",
        color: "#fff",
        paddingLeft: 16,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imageUri} style={{ height: 35, width: 35, marginRight: 8 }} />
      Welcome
    </div>
  );
};

export default Header;
