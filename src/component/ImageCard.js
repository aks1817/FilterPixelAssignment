import React from "react";

const Imagecard = ({ imageUri, onClick, index, activeImageIndex }) => {
  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        display: "flex",
      }}
      onClick={() => {
        onClick(index, imageUri);
      }}
    >
      <img
        src={imageUri}
        style={{
          height: activeImageIndex === index ? 120 : 100,
          width: activeImageIndex === index ? 180 : 160,
          marginRight: 8,
          border: activeImageIndex === index ? "1px solid #fff" : null,
          opacity: activeImageIndex === index ? 1 : 0.5,
        }}
      />
    </div>
  );
};

export default Imagecard;
