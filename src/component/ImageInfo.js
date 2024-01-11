import React from "react";
import { arrayDummy } from "../Constants";

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
    <div
      style={{
        display: "flex",
        background: "#262626",

        color: "#fff",
        flex: 1,
        marginLeft: 10,
        paddingTop: 60,
        flexDirection: "column",
      }}
    >
      <div style={{ border: "0.5px solid #404040", marginBottom: 10 }} />
      <div style={{ paddingLeft: 8 }}>
        About Image
        <div
          style={{ flexDirection: "column", marginTop: 30, paddingLeft: 16 }}
        >
          {arrayDummy.map((item, index) => (
            <DetailsLabel value={item.value} label={item.label} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;
