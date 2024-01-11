import React from "react";
import { arrayDummy } from "../Constants";
import { imageInfoContainer, labelContainer, separator } from "./Styles";

const DetailsLabel = ({ label, value }) => {
  return (
    <div style={{ flexDirection: "row", display: "flex", marginBottom: 15 }}>
      <div
        style={{
          color: "#fff",
          marginRight: 10,
        }}
      >
        {label}:
      </div>
      <div
        style={{
          color: "#fff",
        }}
      >
        {value}
      </div>
    </div>
  );
};
const ImageInfo = () => {
  return (
    <div style={imageInfoContainer}>
      <div style={separator} />
      <div style={{ paddingLeft: 8 }}>
        About Image
        <div style={labelContainer}>
          {arrayDummy.map((item, index) => (
            <DetailsLabel value={item.value} label={item.label} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
