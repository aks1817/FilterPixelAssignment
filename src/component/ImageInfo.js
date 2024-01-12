import React from "react";
import { imageInfoContainer, labelContainer, separator } from "./Styles";
import { useSelector } from "react-redux";

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
const ImageInfo = ({ activeImageIndex }) => {
  const { data } = useSelector((state) => state.data);
  const info = data && data[activeImageIndex] && data[activeImageIndex].info;

  return (
    <div style={imageInfoContainer}>
      <div style={separator} />
      <div style={{ paddingLeft: 8 }}>
        About Image
        <div style={labelContainer}>
          {info &&
            Object.entries(info).map(([label, value], index) => (
              <DetailsLabel value={value} label={label} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
